"use client"

import { User, Eye, MoreHorizontal, Wifi } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="ios-header-gradient px-4 pb-4 pt-2 safe-top">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg font-bold text-primary-foreground">Lava Jato Pro</h1>
        <button className="text-primary-foreground" aria-label="Mais opcoes">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* User info bar */}
      <div className="flex items-center justify-between rounded-xl bg-card/90 backdrop-blur-sm px-3 py-2">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-card-foreground">Eduardo</span>
          <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
            25
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-muted-foreground" aria-label="Wifi">
            <Wifi className="h-4 w-4" />
          </button>
          <button className="text-muted-foreground" aria-label="Visualizar">
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
