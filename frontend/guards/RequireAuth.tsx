"use client"

import React, { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from '../hooks/useAuth'

interface Props {
  children: React.ReactNode
}

export const RequireAuth: React.FC<Props> = ({ children }) => {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!loading && !user) {
      router.replace(`/login?from=${encodeURIComponent(pathname)}`)
    }
  }, [loading, user, pathname, router])

  if (loading) {
    return <div className="p-4 text-center text-sm text-muted-foreground">Carregando...</div>
  }

  if (!user) {
    return null
  }

  return <>{children}</>
}

