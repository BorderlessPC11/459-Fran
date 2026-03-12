"use client"

import { LogOut } from "lucide-react"
import { useAuth } from "../hooks/useAuth"

export function LogoutButton() {
  const { logout } = useAuth()

  async function handleClick() {
    await logout()
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-1 rounded-full border border-primary/40 px-2 py-0.5 text-[10px] font-medium text-primary-foreground bg-primary/20"
    >
      <LogOut className="h-3 w-3" />
      <span>Sair</span>
    </button>
  )
}

