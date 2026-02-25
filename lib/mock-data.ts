export type VehicleStatus = "aguardando" | "em-andamento" | "concluido" | "cancelado"

export interface Vehicle {
  id: string
  plate: string
  model: string
  color: string
  owner: string
  phone: string
  status: VehicleStatus
  services: Service[]
  entryDate: string
  entryTime: string
  parkingCharge: boolean
  progress: number
}

export interface Service {
  id: string
  name: string
  price: number
  quantity: number
  responsible: string
  status: VehicleStatus
}

export interface CashEntry {
  label: string
  value: number
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    plate: "ADA 1231",
    model: "Honda Civic",
    color: "Prata",
    owner: "Carlos Silva",
    phone: "+55 11 99999-0001",
    status: "em-andamento",
    services: [
      { id: "s1", name: "Higienizacao interna", price: 35, quantity: 1, responsible: "Eduardo", status: "em-andamento" },
      { id: "s2", name: "Lavagem completa", price: 60, quantity: 1, responsible: "Eduardo", status: "aguardando" },
    ],
    entryDate: "23/08/2024",
    entryTime: "12:13",
    parkingCharge: false,
    progress: 30,
  },
  {
    id: "2",
    plate: "AHC 2432",
    model: "Toyota Corolla",
    color: "Branco",
    owner: "Maria Oliveira",
    phone: "+55 11 99999-0002",
    status: "concluido",
    services: [
      { id: "s3", name: "Polimento", price: 170, quantity: 1, responsible: "Eduardo", status: "concluido" },
      { id: "s4", name: "Lavagem completa", price: 72, quantity: 1, responsible: "Eduardo", status: "concluido" },
    ],
    entryDate: "23/08/2024",
    entryTime: "10:30",
    parkingCharge: true,
    progress: 100,
  },
  {
    id: "3",
    plate: "ASD 1211",
    model: "Volkswagen Golf",
    color: "Preto",
    owner: "Joao Santos",
    phone: "+55 11 99999-0003",
    status: "concluido",
    services: [
      { id: "s5", name: "Vitrificacao", price: 100, quantity: 1, responsible: "Eduardo", status: "concluido" },
    ],
    entryDate: "23/08/2024",
    entryTime: "09:00",
    parkingCharge: false,
    progress: 100,
  },
  {
    id: "4",
    plate: "ASD 5221",
    model: "Fiat Argo",
    color: "Vermelho",
    owner: "Ana Souza",
    phone: "+55 11 99999-0004",
    status: "aguardando",
    services: [
      { id: "s6", name: "Lavagem simples", price: 28, quantity: 1, responsible: "Eduardo", status: "aguardando" },
    ],
    entryDate: "23/08/2024",
    entryTime: "14:00",
    parkingCharge: true,
    progress: 0,
  },
  {
    id: "5",
    plate: "GIB 8654",
    model: "Chevrolet Onix",
    color: "Azul",
    owner: "Pedro Lima",
    phone: "+55 11 99999-0005",
    status: "em-andamento",
    services: [
      { id: "s7", name: "Lavagem completa", price: 72, quantity: 1, responsible: "Eduardo", status: "em-andamento" },
      { id: "s8", name: "Higienizacao interna", price: 35, quantity: 1, responsible: "Eduardo", status: "aguardando" },
    ],
    entryDate: "23/08/2024",
    entryTime: "11:45",
    parkingCharge: false,
    progress: 45,
  },
  {
    id: "6",
    plate: "QSW 1211",
    model: "Hyundai HB20",
    color: "Cinza",
    owner: "Fernanda Costa",
    phone: "+55 11 99999-0006",
    status: "em-andamento",
    services: [
      { id: "s9", name: "Polimento", price: 170, quantity: 1, responsible: "Eduardo", status: "em-andamento" },
    ],
    entryDate: "23/08/2024",
    entryTime: "13:30",
    parkingCharge: false,
    progress: 60,
  },
  {
    id: "7",
    plate: "QQQ 1111",
    model: "Ford Focus",
    color: "Preto",
    owner: "Eduardo",
    phone: "+55 11 99999-0007",
    status: "em-andamento",
    services: [
      { id: "s10", name: "Higienizacao interna", price: 35, quantity: 1, responsible: "Eduardo", status: "concluido" },
      { id: "s11", name: "Lavagem completa", price: 60, quantity: 1, responsible: "Eduardo", status: "em-andamento" },
      { id: "s12", name: "Vitrificacao", price: 100, quantity: 1, responsible: "Eduardo", status: "aguardando" },
    ],
    entryDate: "23/08/2024",
    entryTime: "12:13",
    parkingCharge: false,
    progress: 50,
  },
  {
    id: "8",
    plate: "BCA 4321",
    model: "Renault Kwid",
    color: "Branco",
    owner: "Lucas Pereira",
    phone: "+55 11 99999-0008",
    status: "em-andamento",
    services: [
      { id: "s13", name: "Lavagem simples", price: 28, quantity: 1, responsible: "Eduardo", status: "em-andamento" },
    ],
    entryDate: "23/08/2024",
    entryTime: "15:00",
    parkingCharge: true,
    progress: 70,
  },
  {
    id: "9",
    plate: "XYZ 9876",
    model: "Jeep Renegade",
    color: "Verde",
    owner: "Mariana Alves",
    phone: "+55 11 99999-0009",
    status: "em-andamento",
    services: [
      { id: "s14", name: "Lavagem completa", price: 72, quantity: 1, responsible: "Eduardo", status: "concluido" },
      { id: "s15", name: "Vitrificacao", price: 100, quantity: 1, responsible: "Eduardo", status: "em-andamento" },
    ],
    entryDate: "23/08/2024",
    entryTime: "08:30",
    parkingCharge: false,
    progress: 55,
  },
  {
    id: "10",
    plate: "DEF 5678",
    model: "Nissan Kicks",
    color: "Prata",
    owner: "Roberto Nunes",
    phone: "+55 11 99999-0010",
    status: "em-andamento",
    services: [
      { id: "s16", name: "Higienizacao interna", price: 35, quantity: 1, responsible: "Eduardo", status: "em-andamento" },
    ],
    entryDate: "23/08/2024",
    entryTime: "16:00",
    parkingCharge: false,
    progress: 20,
  },
  {
    id: "11",
    plate: "MNO 3456",
    model: "Chevrolet Tracker",
    color: "Branco",
    owner: "Camila Ribeiro",
    phone: "+55 11 99999-0011",
    status: "em-andamento",
    services: [
      { id: "s17", name: "Lavagem completa", price: 72, quantity: 1, responsible: "Eduardo", status: "em-andamento" },
    ],
    entryDate: "23/08/2024",
    entryTime: "14:45",
    parkingCharge: true,
    progress: 40,
  },
  {
    id: "12",
    plate: "GHI 7890",
    model: "Volkswagen T-Cross",
    color: "Azul",
    owner: "Thiago Mendes",
    phone: "+55 11 99999-0012",
    status: "concluido",
    services: [
      { id: "s18", name: "Lavagem simples", price: 28, quantity: 1, responsible: "Eduardo", status: "concluido" },
    ],
    entryDate: "23/08/2024",
    entryTime: "09:30",
    parkingCharge: false,
    progress: 100,
  },
  {
    id: "13",
    plate: "JKL 1234",
    model: "Fiat Pulse",
    color: "Vermelho",
    owner: "Patricia Gomes",
    phone: "+55 11 99999-0013",
    status: "concluido",
    services: [
      { id: "s19", name: "Polimento", price: 170, quantity: 1, responsible: "Eduardo", status: "concluido" },
      { id: "s20", name: "Vitrificacao", price: 100, quantity: 1, responsible: "Eduardo", status: "concluido" },
    ],
    entryDate: "23/08/2024",
    entryTime: "08:00",
    parkingCharge: true,
    progress: 100,
  },
  {
    id: "14",
    plate: "PQR 5678",
    model: "Honda HR-V",
    color: "Prata",
    owner: "Diego Ferreira",
    phone: "+55 11 99999-0014",
    status: "concluido",
    services: [
      { id: "s21", name: "Lavagem completa", price: 72, quantity: 1, responsible: "Eduardo", status: "concluido" },
      { id: "s22", name: "Higienizacao interna", price: 35, quantity: 1, responsible: "Eduardo", status: "concluido" },
    ],
    entryDate: "23/08/2024",
    entryTime: "10:00",
    parkingCharge: false,
    progress: 100,
  },
  {
    id: "15",
    plate: "STU 9012",
    model: "Toyota Yaris",
    color: "Preto",
    owner: "Amanda Barbosa",
    phone: "+55 11 99999-0015",
    status: "concluido",
    services: [
      { id: "s23", name: "Lavagem simples", price: 28, quantity: 1, responsible: "Eduardo", status: "concluido" },
    ],
    entryDate: "23/08/2024",
    entryTime: "11:00",
    parkingCharge: false,
    progress: 100,
  },
]

export const cashData = {
  month: "Agosto",
  year: 2024,
  emCaixa: 467.60,
  entradas: {
    total: 517.00,
    veiculos: 462.00,
    vendas: 55.00,
  },
  saidas: {
    total: 49.40,
    custoServicos: 39.40,
    custoProdutos: 10.00,
  },
  descontos: {
    total: 10.00,
    quantidade: 1,
  },
  cancelamentos: {
    total: 110.00,
    quantidade: 1,
  },
  servicos: [
    { label: "Polimento", quantity: 2, value: 170.00 },
    { label: "Lavagem completa", quantity: 6, value: 72.00 },
    { label: "Higienizacao interna", quantity: 2, value: 70.00 },
    { label: "Vitrificacao", quantity: 4, value: 44.00 },
    { label: "Lavagem simples", quantity: 3, value: 28.00 },
  ],
}

export function getStatusLabel(status: VehicleStatus) {
  switch (status) {
    case "aguardando": return "Aguardando"
    case "em-andamento": return "Em andamento"
    case "concluido": return "Concluido"
    case "cancelado": return "Cancelado"
  }
}

export function getStatusColor(status: VehicleStatus) {
  switch (status) {
    case "aguardando": return "text-amber-500"
    case "em-andamento": return "text-blue-500"
    case "concluido": return "text-emerald-500"
    case "cancelado": return "text-red-500"
  }
}

export function getStatusBgColor(status: VehicleStatus) {
  switch (status) {
    case "aguardando": return "bg-amber-50 border-amber-200"
    case "em-andamento": return "bg-blue-50 border-blue-200"
    case "concluido": return "bg-emerald-50 border-emerald-200"
    case "cancelado": return "bg-red-50 border-red-200"
  }
}

export function getProgressColor(status: VehicleStatus) {
  switch (status) {
    case "aguardando": return "bg-amber-400"
    case "em-andamento": return "bg-blue-400"
    case "concluido": return "bg-emerald-400"
    case "cancelado": return "bg-red-400"
  }
}
