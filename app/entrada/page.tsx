"use client"

import { useState } from "react"
import { MobileShell } from "@/components/mobile-shell"
import {
  Camera,
  Image as ImageIcon,
  User,
  ChevronDown,
  Square,
  Shield,
  Pencil,
  Phone,
  Car,
} from "lucide-react"

export default function EntradaPage() {
  const [plate, setPlate] = useState("")
  const [model, setModel] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [parkingCharge, setParkingCharge] = useState(false)
  const [observations, setObservations] = useState("")

  return (
    <MobileShell title="Entrada" showBack showMore>
      <div className="px-4 py-4 flex flex-col gap-5">
        {/* Plate section */}
        <div className="flex flex-col items-center gap-2">
          <input
            type="text"
            placeholder="AAA 0000"
            value={plate}
            onChange={(e) => setPlate(e.target.value.toUpperCase())}
            className="text-center text-3xl font-bold text-card-foreground bg-transparent outline-none placeholder:text-muted-foreground/40 w-full"
            maxLength={8}
          />
          <div className="h-px w-full bg-border" />
          <div className="flex items-center gap-3 text-muted-foreground">
            <span className="text-xs">191</span>
            <button aria-label="Camera">
              <Camera className="h-5 w-5" />
            </button>
            <button aria-label="Galeria">
              <ImageIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Vehicle model */}
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2 flex-1">
            <Car className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Modelo do veiculo"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="flex-1 text-sm text-card-foreground bg-transparent outline-none placeholder:text-muted-foreground"
            />
          </div>
          <button className="flex items-center gap-1 text-muted-foreground">
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        {/* Customer data */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-card-foreground">
              Dados do cliente
            </h3>
            <User className="h-5 w-5 text-primary" />
          </div>
          <div className="border-b border-border pb-2">
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-sm text-card-foreground bg-transparent outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex items-center gap-2 border-b border-border pb-2">
            <div className="flex items-center gap-1">
              <div className="h-4 w-6 rounded-sm bg-emerald-500 flex items-center justify-center">
                <span className="text-[8px] text-primary-foreground font-bold">BR</span>
              </div>
              <span className="text-xs text-muted-foreground">+55</span>
            </div>
            <Phone className="h-3.5 w-3.5 text-muted-foreground" />
            <input
              type="tel"
              placeholder="Celular"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 text-sm text-card-foreground bg-transparent outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-0">
          {/* Parking charge */}
          <button
            onClick={() => setParkingCharge(!parkingCharge)}
            className="flex items-center justify-between py-3 border-b border-border"
          >
            <span className="text-sm font-medium text-card-foreground">
              Cobrar estacionamento
            </span>
            <div
              className={`h-5 w-5 rounded border-2 flex items-center justify-center transition-colors ${
                parkingCharge
                  ? "bg-primary border-primary"
                  : "border-muted-foreground/40"
              }`}
            >
              {parkingCharge && (
                <svg className="h-3 w-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </button>

          {/* Services */}
          <button className="flex items-center justify-between py-3 border-b border-border">
            <span className="text-sm font-medium text-card-foreground">Servicos</span>
            <Shield className="h-5 w-5 text-primary" />
          </button>

          {/* Objects */}
          <button className="flex items-center justify-between py-3 border-b border-border">
            <span className="text-sm font-medium text-card-foreground">
              Objetos no veiculo
            </span>
            <Pencil className="h-4 w-4 text-primary" />
          </button>

          {/* Damages */}
          <button className="flex items-center justify-between py-3 border-b border-border">
            <span className="text-sm font-medium text-card-foreground">Avarias</span>
            <Pencil className="h-4 w-4 text-primary" />
          </button>
        </div>

        {/* Observations */}
        <div>
          <textarea
            placeholder="Observacoes"
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
            rows={3}
            className="w-full rounded-lg border border-border bg-card p-3 text-sm text-card-foreground outline-none placeholder:text-primary/60 resize-none"
          />
        </div>

        {/* Submit button */}
        <button className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground active:opacity-80 transition-opacity">
          Registrar entrada
        </button>
      </div>
    </MobileShell>
  )
}
