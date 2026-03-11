"use client"

import { useState } from "react"
import { MobileShell } from "@/components/mobile-shell"
import { PatioList } from "@/components/patio/patio-list"
import { PatioBoard } from "@/components/patio/patio-board"
import { Search, User, LayoutGrid, List, Filter } from "lucide-react"

export default function PatioPage() {
  const [view, setView] = useState<"list" | "board">("list")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <MobileShell title="Patio" showBack>
      <div className="px-4 py-3 flex flex-col gap-3">
        {/* Search bar */}
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 rounded-lg bg-card border border-border px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Placa"
              className="flex-1 bg-transparent text-sm text-card-foreground placeholder:text-muted-foreground outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="text-muted-foreground" aria-label="Filtrar por usuario">
            <User className="h-5 w-5" />
          </button>
        </div>

        {/* View toggle and filters */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 rounded-lg bg-card border border-border p-0.5">
            <button
              onClick={() => setView("list")}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                view === "list"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <List className="h-4 w-4" />
            </button>
            <button
              onClick={() => setView("board")}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                view === "board"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
          </div>
          <button className="flex items-center gap-1 text-xs text-primary font-medium">
            <Filter className="h-3.5 w-3.5" />
            Servicos
          </button>
        </div>

        {/* Vehicle list or board */}
        {view === "list" ? <PatioList /> : <PatioBoard />}
      </div>
    </MobileShell>
  )
}
