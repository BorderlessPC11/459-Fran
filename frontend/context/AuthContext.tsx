"use client"

import React, { createContext, useEffect, useState, type ReactNode } from 'react'
import type { AuthUser, Role } from '../types/auth'
import {
  loginWithEmailPassword,
  registerWithEmailPassword,
  logout as serviceLogout,
  subscribeToAuthChanges,
} from '../services/authService'

interface AuthContextValue {
  user: AuthUser | null
  role: Role | null
  loading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

interface Props {
  children: ReactNode
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges(
      (nextUser) => {
        setUser(nextUser)
        setLoading(false)
      },
      (err) => {
        console.error(err)
        setError('Erro ao sincronizar autenticação')
      },
    )

    return () => unsubscribe()
  }, [])

  const login = async (email: string, password: string) => {
    setError(null)
    try {
      await loginWithEmailPassword(email, password)
    } catch (err: any) {
      console.error(err)
      setError(err?.message ?? 'Erro ao fazer login')
      throw err
    }
  }

  const register = async (email: string, password: string) => {
    setError(null)
    try {
      await registerWithEmailPassword(email, password)
    } catch (err: any) {
      console.error(err)
      setError(err?.message ?? 'Erro ao registrar')
      throw err
    }
  }

  const logout = async () => {
    setError(null)
    try {
      await serviceLogout()
    } catch (err: any) {
      console.error(err)
      setError(err?.message ?? 'Erro ao sair')
      throw err
    }
  }

  const value: AuthContextValue = {
    user,
    role: user?.role ?? null,
    loading,
    error,
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

