"use client"

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from '../hooks/useAuth'
import type { Role } from '../types/auth'

interface Props {
  allowedRoles: Role[]
  children: React.ReactNode
}

export const RequireRole: React.FC<Props> = ({ allowedRoles, children }) => {
  const { user, role, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  if (loading) {
    return <div className="p-4 text-center text-sm text-muted-foreground">Carregando...</div>
  }

  if (!user) {
    router.replace(`/login?from=${encodeURIComponent(pathname)}`)
    return null
  }

  if (!role || !allowedRoles.includes(role)) {
    router.replace('/not-authorized')
    return null
  }

  return <>{children}</>
}

