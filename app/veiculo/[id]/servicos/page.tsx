"use client"

import { use } from "react"
import { MobileShell } from "@/components/mobile-shell"
import { vehicles, getProgressColor, type VehicleStatus } from "@/lib/mock-data"
import { Pencil, Clock, Loader2, CheckCircle2 } from "lucide-react"

function StatusSelector({
  currentStatus,
}: {
  currentStatus: VehicleStatus
}) {
  const statuses: { key: VehicleStatus; label: string; icon: React.ReactNode; color: string; bgColor: string }[] = [
    {
      key: "aguardando",
      label: "Aguardando",
      icon: <Clock className="h-5 w-5" />,
      color: "text-amber-500",
      bgColor: "bg-amber-100",
    },
    {
      key: "em-andamento",
      label: "Em andamento",
      icon: <Loader2 className="h-5 w-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      key: "concluido",
      label: "Concluido",
      icon: <CheckCircle2 className="h-5 w-5" />,
      color: "text-emerald-500",
      bgColor: "bg-emerald-100",
    },
  ]

  return (
    <div className="flex items-center gap-3 mt-2">
      {statuses.map((s) => {
        const isActive = s.key === currentStatus
        return (
          <button
            key={s.key}
            className={`flex flex-col items-center gap-1 ${s.color}`}
          >
            <div
              className={`rounded-full p-2 transition-all ${
                isActive
                  ? `${s.bgColor} ring-2 ring-offset-1 ${
                      s.key === "aguardando"
                        ? "ring-amber-400"
                        : s.key === "em-andamento"
                        ? "ring-blue-400"
                        : "ring-emerald-400"
                    }`
                  : "bg-muted"
              }`}
            >
              {s.icon}
            </div>
            <span className="text-[10px] font-medium">{s.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default function ServiceControlPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const vehicle = vehicles.find((v) => v.id === id)

  if (!vehicle) {
    return (
      <MobileShell title="Veiculo nao encontrado" showBack>
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Veiculo nao encontrado</p>
        </div>
      </MobileShell>
    )
  }

  const completedServices = vehicle.services.filter(
    (s) => s.status === "concluido"
  ).length
  const progressPercent =
    vehicle.services.length > 0
      ? Math.round((completedServices / vehicle.services.length) * 100)
      : 0

  return (
    <MobileShell title="Controle de servicos" showBack>
      <div className="px-4 py-4 flex flex-col gap-4">
        {/* Overall progress */}
        <div className="rounded-xl bg-card border border-border p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-card-foreground mb-2">
            Evolucao do atendimento:
          </h3>
          <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${getProgressColor(vehicle.status)}`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground text-right mt-1">
            {progressPercent}%
          </p>
        </div>

        {/* Individual services */}
        {vehicle.services.map((service) => (
          <div
            key={service.id}
            className="rounded-xl bg-card border border-border p-4 shadow-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-card-foreground">
                {service.name}
              </h3>
              <span className="text-xs text-muted-foreground">
                Qtd: {service.quantity}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Responsavel:</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-card-foreground font-medium">
                    {service.responsible}
                  </span>
                  <Pencil className="h-3 w-3 text-primary" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Valor:</span>
                <span className="text-xs text-card-foreground font-medium">
                  R$ {service.price.toFixed(2).replace(".", ",")}
                </span>
              </div>
            </div>

            <div className="mt-3">
              <span className="text-xs text-muted-foreground">Status:</span>
              <StatusSelector currentStatus={service.status} />
            </div>
          </div>
        ))}
      </div>
    </MobileShell>
  )
}
