"use client"

import React, { useEffect } from 'react'
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

  useEffect(() => {
    if (!loading && !user) {
      router.replace(`/login?from=${encodeURIComponent(pathname)}`)
    } else if (!loading && user && (!role || !allowedRoles.includes(role))) {
      router.replace('/not-authorized')
    }
  }, [loading, user, role, allowedRoles, pathname, router])

  if (loading) {
    return <div className="p-4 text-center text-sm text-muted-foreground">Carregando...</div>
  }

  if (!user || !role || !allowedRoles.includes(role)) {
    return null
  }

  return <>{children}</>
}

