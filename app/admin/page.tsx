"use client"

import { MobileShell } from "@/components/mobile-shell"
import { Search } from "lucide-react"
import {
  Settings,
  BarChart3,
  DollarSign,
  ParkingCircle,
  Car,
  Tag,
  Armchair,
  Package,
  Layers,
  ClipboardCheck,
  Handshake,
  CalendarDays,
  Ban,
  Users,
  Shield,
  Printer,
  MessageSquare,
  FileSignature,
  Phone,
  Palette,
  Gift,
} from "lucide-react"

const adminItems = [
  { label: "Configuracoes", icon: <Settings className="h-6 w-6" /> },
  { label: "Relatorios", icon: <BarChart3 className="h-6 w-6" /> },
  { label: "Tabela de precos", icon: <DollarSign className="h-6 w-6" /> },
  { label: "Promocao para estacionamento", icon: <ParkingCircle className="h-6 w-6" /> },
  { label: "Servicos para veiculos", icon: <Car className="h-6 w-6" /> },
  { label: "Promocao para servicos", icon: <Tag className="h-6 w-6" /> },
  { label: "Servicos para estofados", icon: <Armchair className="h-6 w-6" /> },
  { label: "Produtos", icon: <Package className="h-6 w-6" /> },
  { label: "Pacotes de servicos", icon: <Layers className="h-6 w-6" /> },
  { label: "Checklist", icon: <ClipboardCheck className="h-6 w-6" /> },
  { label: "Convenios", icon: <Handshake className="h-6 w-6" /> },
  { label: "Mensalistas", icon: <CalendarDays className="h-6 w-6" /> },
  { label: "Bloquear placas", icon: <Ban className="h-6 w-6" /> },
  { label: "Funcionarios", icon: <Users className="h-6 w-6" /> },
  { label: "Permissoes", icon: <Shield className="h-6 w-6" /> },
  { label: "Impressora", icon: <Printer className="h-6 w-6" /> },
  { label: "Mensagem", icon: <MessageSquare className="h-6 w-6" /> },
  { label: "Assinar licenca", icon: <FileSignature className="h-6 w-6" /> },
  { label: "Contato", icon: <Phone className="h-6 w-6" /> },
  { label: "Customizar", icon: <Palette className="h-6 w-6" /> },
  { label: "Indique e ganhe", icon: <Gift className="h-6 w-6" /> },
]

export default function AdminPage() {
  return (
    <MobileShell title="Administracao" showBack>
      <div className="px-4 py-4 flex flex-col gap-4">
        {/* Search */}
        <div className="flex items-center gap-2 rounded-lg bg-card border border-border px-3 py-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar..."
            className="flex-1 bg-transparent text-sm text-card-foreground placeholder:text-muted-foreground outline-none"
          />
        </div>

        {/* Grid of admin options */}
        <div className="grid grid-cols-3 gap-3">
          {adminItems.map((item) => (
            <button
              key={item.label}
              className="flex flex-col items-center gap-2 rounded-xl bg-card border border-border p-3 shadow-sm active:bg-secondary/50 transition-colors"
            >
              <div className="text-muted-foreground">{item.icon}</div>
              <span className="text-[10px] text-center text-card-foreground font-medium leading-tight">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </MobileShell>
  )
}
