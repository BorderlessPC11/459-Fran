"use client"

import type { ReactNode } from 'react'
import { RequireRole } from '../../guards/RequireRole'

export default function GestorLayout({ children }: { children: ReactNode }) {
  return (
    <RequireRole allowedRoles={['gestor']}>
      {children}
    </RequireRole>
  )
}

