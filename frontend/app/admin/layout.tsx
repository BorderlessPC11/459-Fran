"use client"

import type { ReactNode } from 'react'
import { RequireRole } from '../../guards/RequireRole'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <RequireRole allowedRoles={['admin']}>
      {children}
    </RequireRole>
  )
}

