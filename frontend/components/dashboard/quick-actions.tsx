"use client"

import Link from "next/link"
import {
  LogIn,
  LayoutGrid,
  LogOut,
  Calendar,
  FileText,
  Clock,
  Users,
  Receipt,
  Wallet,
  Handshake,
  HeadphonesIcon,
  Settings,
  Car,
} from "lucide-react"

interface ActionItem {
  label: string
  icon: React.ReactNode
  href: string
}

const vehicleActions: ActionItem[] = [
  { label: "Entrada", icon: <LogIn className="h-5 w-5" />, href: "/entrada" },
  { label: "Patio", icon: <LayoutGrid className="h-5 w-5" />, href: "/patio" },
  { label: "Saida", icon: <LogOut className="h-5 w-5" />, href: "/patio" },
  { label: "Agendar", icon: <Calendar className="h-5 w-5" />, href: "/" },
  { label: "Orcamento", icon: <FileText className="h-5 w-5" />, href: "/" },
  { label: "Historico", icon: <Clock className="h-5 w-5" />, href: "/" },
]

const otherActions: ActionItem[] = [
  { label: "Clientes", icon: <Users className="h-5 w-5" />, href: "/" },
  { label: "Contas", icon: <Receipt className="h-5 w-5" />, href: "/" },
  { label: "Caixa", icon: <Wallet className="h-5 w-5" />, href: "/caixa" },
  { label: "Convenios", icon: <Handshake className="h-5 w-5" />, href: "/" },
  { label: "Pos-venda", icon: <HeadphonesIcon className="h-5 w-5" />, href: "/" },
  { label: "Admin", icon: <Settings className="h-5 w-5" />, href: "/admin" },
]

function ActionGrid({ title, actions }: { title: string; actions: ActionItem[] }) {
  return (
    <div className="rounded-xl bg-card p-4 shadow-sm border border-border">
      <div className="flex items-center gap-2 mb-3">
        <Car className="h-4 w-4 text-muted-foreground" />
        <h3 className="text-sm font-semibold text-card-foreground">{title}</h3>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex flex-col items-center gap-1.5 rounded-lg bg-secondary/50 p-3 transition-colors active:bg-secondary"
          >
            <div className="text-muted-foreground">{action.icon}</div>
            <span className="text-[11px] text-card-foreground font-medium">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function QuickActions() {
  return (
    <div className="flex flex-col gap-4">
      <ActionGrid title="Veiculos" actions={vehicleActions} />
      <ActionGrid title="Outras opcoes" actions={otherActions} />
    </div>
  )
}
