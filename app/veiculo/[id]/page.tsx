"use client"

import { use } from "react"
import Link from "next/link"
import { MobileShell } from "@/components/mobile-shell"
import { vehicles, getStatusLabel, getStatusColor, getProgressColor } from "@/lib/mock-data"
import {
  Phone,
  FileText,
  MessageSquare,
  CheckCircle,
  DollarSign,
  Pencil,
  PlusCircle,
  Square,
  Car,
  Clock,
  Shield,
  Package,
  ParkingCircle,
  Handshake,
} from "lucide-react"

export default function VehicleInfoPage({
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

  const totalServices = vehicle.services.reduce(
    (sum, s) => sum + s.price * s.quantity,
    0
  )
  const completedServices = vehicle.services.filter(
    (s) => s.status === "concluido"
  ).length
  const progressPercent =
    vehicle.services.length > 0
      ? Math.round((completedServices / vehicle.services.length) * 100)
      : 0

  const quickActions = [
    { label: "Ligar", icon: <Phone className="h-5 w-5" /> },
    { label: "PDF", icon: <FileText className="h-5 w-5" /> },
    { label: "Mensagem com OS", icon: <MessageSquare className="h-5 w-5" /> },
    { label: "Conclusao de servico", icon: <CheckCircle className="h-5 w-5" /> },
    { label: "Conclusao sem R$", icon: <DollarSign className="h-5 w-5" /> },
  ]

  return (
    <MobileShell title="Informacoes do veiculo" showBack>
      <div className="px-4 py-4 flex flex-col gap-4">
        {/* Owner and vehicle info */}
        <div className="rounded-xl bg-card border border-border p-4 shadow-sm">
          <h2 className="text-lg font-bold text-card-foreground">{vehicle.owner}</h2>
          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
            <Car className="h-3.5 w-3.5" />
            <span>{vehicle.plate}</span>
            <span>{">"}</span>
            <span>{vehicle.model}</span>
            <span className="inline-block h-3 w-3 rounded-sm bg-card-foreground" />
          </div>
          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>
              {vehicle.entryTime} - {vehicle.entryDate}
            </span>
          </div>
        </div>

        {/* Quick actions */}
        <div className="rounded-xl bg-card border border-border p-4 shadow-sm">
          <h3 className="text-xs font-medium text-muted-foreground mb-3">Opcoes</h3>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {quickActions.map((action) => (
              <button
                key={action.label}
                className="flex flex-col items-center gap-1.5 min-w-[60px]"
              >
                <div className="rounded-full bg-primary/10 p-2.5 text-primary">
                  {action.icon}
                </div>
                <span className="text-[10px] text-card-foreground text-center leading-tight">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="rounded-xl bg-card border border-border p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-card-foreground">
              Status do atendimento
            </h3>
            <Pencil className="h-4 w-4 text-primary" />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div
              className={`h-2.5 w-2.5 rounded-full ${
                vehicle.status === "em-andamento"
                  ? "bg-blue-500"
                  : vehicle.status === "concluido"
                  ? "bg-emerald-500"
                  : vehicle.status === "aguardando"
                  ? "bg-amber-500"
                  : "bg-red-500"
              }`}
            />
            <span className={`text-sm ${getStatusColor(vehicle.status)}`}>
              {getStatusLabel(vehicle.status)}
            </span>
          </div>
        </div>

        {/* Services */}
        <div className="rounded-xl bg-card border border-border p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-card-foreground">Servicos</h3>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <Link
                href={`/veiculo/${vehicle.id}/servicos`}
                className="text-primary text-xs font-medium"
              >
                Ver controle
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            {vehicle.services.map((service) => (
              <div key={service.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-card-foreground">{service.name}</p>
                  <p className="text-[10px] text-muted-foreground">
                    Qtd: {service.quantity} -{">"} Atend.: {service.responsible}
                  </p>
                </div>
                <span className="text-sm font-medium text-card-foreground">
                  R$ {service.price.toFixed(2).replace(".", ",")}
                </span>
              </div>
            ))}
          </div>
          {/* Progress bar */}
          <div className="mt-3">
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${getProgressColor(vehicle.status)}`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-[10px] text-muted-foreground text-right mt-1">
              {progressPercent.toFixed(0)}%
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="rounded-xl bg-card border border-border p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-card-foreground">Produtos</h3>
            <PlusCircle className="h-4 w-4 text-primary" />
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Nenhum produto selecionado
          </p>
        </div>

        {/* Parking */}
        <div className="rounded-xl bg-card border border-border p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-card-foreground">
              Estacionamento
            </h3>
            <div
              className={`h-5 w-5 rounded border-2 flex items-center justify-center ${
                vehicle.parkingCharge
                  ? "bg-primary border-primary"
                  : "border-muted-foreground/40"
              }`}
            >
              {vehicle.parkingCharge && (
                <svg className="h-3 w-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {vehicle.parkingCharge
              ? "Cobranca de estacionamento habilitada"
              : "Cobranca de estacionamento desabilitada"}
          </p>
        </div>

        {/* Agreement */}
        <div className="rounded-xl bg-card border border-border p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-card-foreground">Convenio</h3>
            <Pencil className="h-4 w-4 text-primary" />
          </div>
          <p className="text-xs text-muted-foreground mt-1">Nao informado</p>
        </div>
      </div>
    </MobileShell>
  )
}
