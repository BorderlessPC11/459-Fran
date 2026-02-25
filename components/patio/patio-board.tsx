"use client"

import Link from "next/link"
import { X, CheckCircle2, User } from "lucide-react"
import {
  vehicles,
  getStatusLabel,
  getStatusColor,
  getStatusBgColor,
  type VehicleStatus,
} from "@/lib/mock-data"

const statusOrder: VehicleStatus[] = [
  "aguardando",
  "em-andamento",
  "concluido",
  "cancelado",
]

function VehicleCard({ vehicle }: { vehicle: (typeof vehicles)[0] }) {
  const borderColor =
    vehicle.status === "aguardando"
      ? "border-amber-200"
      : vehicle.status === "em-andamento"
      ? "border-blue-200"
      : vehicle.status === "concluido"
      ? "border-emerald-200"
      : "border-red-200"

  const bgColor =
    vehicle.status === "aguardando"
      ? "bg-amber-50"
      : vehicle.status === "em-andamento"
      ? "bg-blue-50"
      : vehicle.status === "concluido"
      ? "bg-emerald-50"
      : "bg-red-50"

  return (
    <Link
      href={`/veiculo/${vehicle.id}`}
      className={`rounded-lg border ${borderColor} ${bgColor} p-3 min-w-[140px] flex flex-col gap-1.5 active:opacity-80 transition-opacity`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-card-foreground">{vehicle.plate}</span>
        <User className="h-3.5 w-3.5 text-muted-foreground" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div
            className={`h-1.5 w-1.5 rounded-full ${
              vehicle.status === "concluido" ? "bg-emerald-500" : "bg-blue-500"
            }`}
          />
          <span className="text-[10px] text-muted-foreground">
            {getStatusLabel(vehicle.status)}
          </span>
        </div>
        <X className="h-4 w-4 text-red-400" />
      </div>
    </Link>
  )
}

export function PatioBoard() {
  const groupedVehicles = statusOrder.map((status) => ({
    status,
    label: getStatusLabel(status),
    vehicles: vehicles.filter((v) => v.status === status),
  }))

  return (
    <div className="flex flex-col gap-4 overflow-x-auto">
      {groupedVehicles.map((group) => {
        const sectionBg =
          group.status === "cancelado"
            ? "bg-red-50"
            : group.status === "concluido"
            ? "bg-emerald-50"
            : group.status === "em-andamento"
            ? "bg-blue-50"
            : "bg-amber-50"

        const sectionBorder =
          group.status === "cancelado"
            ? "border-red-200"
            : group.status === "concluido"
            ? "border-emerald-200"
            : group.status === "em-andamento"
            ? "border-blue-200"
            : "border-amber-200"

        return (
          <div
            key={group.status}
            className={`rounded-xl ${sectionBg} border ${sectionBorder} p-3`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div
                  className={`h-2.5 w-2.5 rounded-full ${
                    group.status === "cancelado"
                      ? "bg-red-500"
                      : group.status === "concluido"
                      ? "bg-emerald-500"
                      : group.status === "em-andamento"
                      ? "bg-blue-500"
                      : "bg-amber-500"
                  }`}
                />
                <span className="text-sm font-semibold text-card-foreground">
                  {group.label}
                </span>
              </div>
              <span className="rounded-full bg-card px-2 py-0.5 text-xs font-bold text-card-foreground">
                {group.vehicles.length}
              </span>
            </div>

            {group.vehicles.length === 0 ? (
              <div className="rounded-lg bg-card/50 p-4 text-center">
                <p className="text-xs text-muted-foreground">
                  Nao ha veiculos com o status {group.label.toLowerCase()} neste momento
                </p>
              </div>
            ) : (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {group.vehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
