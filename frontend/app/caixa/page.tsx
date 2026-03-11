"use client"

import { useState } from "react"
import { MobileShell } from "@/components/mobile-shell"
import { cashData } from "@/lib/mock-data"
import { ChevronDown, Wallet, List } from "lucide-react"

function formatCurrency(value: number) {
  return `R$ ${value.toFixed(2).replace(".", ",")}`
}

interface SectionProps {
  title: string
  total: number
  color: string
  bgColor: string
  children?: React.ReactNode
  icon?: React.ReactNode
}

function CashSection({ title, total, color, bgColor, children, icon }: SectionProps) {
  return (
    <div className="rounded-xl bg-card border border-border shadow-sm overflow-hidden">
      <div className={`${bgColor} px-4 py-2.5 flex items-center justify-between`}>
        <div className="flex items-center gap-2">
          <span className={`text-sm font-bold ${color}`}>{title}</span>
          {icon}
        </div>
        <span className={`text-sm font-bold ${color}`}>{formatCurrency(total)}</span>
      </div>
      {children && <div className="px-4 py-2.5">{children}</div>}
    </div>
  )
}

export default function CaixaPage() {
  const [month] = useState(cashData.month)
  const [year] = useState(cashData.year)

  return (
    <MobileShell title="Caixa" showBack>
      <div className="px-4 py-4 flex flex-col gap-3">
        {/* Month/Year selector */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground">
            {month}
            <ChevronDown className="h-3 w-3" />
          </button>
          <button className="flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground">
            {year}
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>

        {/* Em caixa */}
        <CashSection
          title="Em caixa"
          total={cashData.emCaixa}
          color="text-blue-700"
          bgColor="bg-blue-100"
          icon={<Wallet className="h-4 w-4 text-blue-700" />}
        >
          <p className="text-center text-xl font-bold text-card-foreground">
            {formatCurrency(cashData.emCaixa)}
          </p>
        </CashSection>

        {/* Entradas */}
        <CashSection
          title="Entradas"
          total={cashData.entradas.total}
          color="text-emerald-700"
          bgColor="bg-emerald-100"
          icon={<List className="h-4 w-4 text-emerald-700" />}
        >
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Veiculos</span>
              <span className="text-card-foreground font-medium">
                {formatCurrency(cashData.entradas.veiculos)}
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Vendas</span>
              <span className="text-card-foreground font-medium">
                {formatCurrency(cashData.entradas.vendas)}
              </span>
            </div>
          </div>
        </CashSection>

        {/* Saidas/Despesas */}
        <CashSection
          title="Saidas / Despesas"
          total={cashData.saidas.total}
          color="text-orange-700"
          bgColor="bg-orange-100"
          icon={<List className="h-4 w-4 text-orange-700" />}
        >
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Custo com servicos</span>
              <span className="text-card-foreground font-medium">
                {formatCurrency(cashData.saidas.custoServicos)}
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Custo com produtos</span>
              <span className="text-card-foreground font-medium">
                {formatCurrency(cashData.saidas.custoProdutos)}
              </span>
            </div>
          </div>
        </CashSection>

        {/* Descontos */}
        <CashSection
          title="Descontos"
          total={cashData.descontos.total}
          color="text-pink-700"
          bgColor="bg-pink-100"
        >
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Quantidade</span>
            <span className="text-card-foreground font-medium">
              {cashData.descontos.quantidade}
            </span>
          </div>
        </CashSection>

        {/* Cancelamentos */}
        <CashSection
          title="Cancelamentos"
          total={cashData.cancelamentos.total}
          color="text-red-700"
          bgColor="bg-red-200"
        >
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Quantidade</span>
            <span className="text-card-foreground font-medium">
              {cashData.cancelamentos.quantidade}
            </span>
          </div>
        </CashSection>

        {/* Servicos */}
        <CashSection
          title="Servicos"
          total={cashData.servicos.reduce(
            (sum, s) => sum + s.value * s.quantity,
            0
          )}
          color="text-teal-700"
          bgColor="bg-teal-100"
          icon={<List className="h-4 w-4 text-teal-700" />}
        >
          <div className="flex flex-col gap-1">
            {cashData.servicos.map((service) => (
              <div key={service.label} className="flex justify-between text-xs">
                <span className="text-muted-foreground">
                  {service.quantity} {service.label}
                </span>
                <span className="text-card-foreground font-medium">
                  R$ {(service.value * service.quantity).toFixed(2).replace(".", ",")}
                </span>
              </div>
            ))}
          </div>
        </CashSection>
      </div>
    </MobileShell>
  )
}
