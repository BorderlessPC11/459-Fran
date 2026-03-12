export type Role = 'admin' | 'atendente' | 'gestor'

export interface AuthUser {
  uid: string
  email: string | null
  role: Role | null
}

