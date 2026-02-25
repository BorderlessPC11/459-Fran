"use client"

import Link from "next/link"
import { X, User } from "lucide-react"
import { vehicles, getStatusLabel, getStatusColor, getProgressColor } from "@/lib/mock-data"

export function PatioList() {
  return (
    <div className="flex flex-col gap-3">
      {vehicles
        .filter((v) => v.status !== "cancelado")
        .map((vehicle) => (
          <Link
            key={vehicle.id}
            href={`/veiculo/${vehicle.id}`}
            className="rounded-xl bg-card border border-border p-4 shadow-sm flex flex-col gap-2 active:bg-secondary/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-card-foreground">
                  {vehicle.plate}
                </span>
                <User className="h-4 w-4 text-muted-foreground" />
              </div>
              <button
                className="text-muted-foreground"
                aria-label={`Remover ${vehicle.plate}`}
                onClick={(e) => e.preventDefault()}
              >
                <X className="h-5 w-5 text-red-400" />
              </button>
            </div>
            <div className="flex items-center gap-1.5">
              <div
                className={`h-2 w-2 rounded-full ${
                  vehicle.status === "aguardando"
                    ? "bg-amber-400"
                    : vehicle.status === "em-andamento"
                    ? "bg-blue-400"
                    : vehicle.status === "concluido"
                    ? "bg-emerald-400"
                    : "bg-red-400"
                }`}
              />
              <span className={`text-xs ${getStatusColor(vehicle.status)}`}>
                {getStatusLabel(vehicle.status)}
              </span>
            </div>
            {vehicle.progress > 0 && vehicle.progress < 100 && (
              <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${getProgressColor(vehicle.status)}`}
                  style={{ width: `${vehicle.progress}%` }}
                />
              </div>
            )}
            {vehicle.progress === 100 && (
              <div className="h-1.5 w-full rounded-full bg-emerald-400" />
            )}
          </Link>
        ))}
    </div>
  )
}
