"use client"

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from '../hooks/useAuth'

interface Props {
  children: React.ReactNode
}

export const RequireAuth: React.FC<Props> = ({ children }) => {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  if (loading) {
    return <div className="p-4 text-center text-sm text-muted-foreground">Carregando...</div>
  }

  if (!user) {
    router.replace(`/login?from=${encodeURIComponent(pathname)}`)
    return null
  }

  return <>{children}</>
}

