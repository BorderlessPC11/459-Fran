"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

export function VehicleSummary() {
  return (
    <div className="rounded-xl bg-card p-4 shadow-sm border border-border">
      <h3 className="text-center text-sm font-semibold text-card-foreground mb-3">
        Veiculos
      </h3>
      <div className="flex items-center justify-between">
        <button className="text-muted-foreground" aria-label="Anterior">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-6">
          <div className="text-xs text-muted-foreground space-y-0.5">
            <div className="flex justify-between gap-4">
              <span>A receber</span>
              <span className="font-medium text-card-foreground">R$ 418,00</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Recebido</span>
              <span className="font-medium text-card-foreground">R$ 202,00</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="font-semibold text-card-foreground">Total</span>
              <span className="font-bold text-card-foreground">R$ 620,00</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-card-foreground">10</div>
              <div className="text-[10px] text-muted-foreground">No patio</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-card-foreground">4</div>
              <div className="text-[10px] text-muted-foreground">Saidas</div>
            </div>
          </div>
        </div>
        <button className="text-muted-foreground" aria-label="Proximo">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
