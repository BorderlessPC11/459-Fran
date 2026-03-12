"use client"

import type { ReactNode } from 'react'
import { RequireRole } from '../../guards/RequireRole'

export default function AtendenteLayout({ children }: { children: ReactNode }) {
  return (
    <RequireRole allowedRoles={['atendente']}>
      {children}
    </RequireRole>
  )
}

