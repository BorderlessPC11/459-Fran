"use client"

export default function NotAuthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm max-w-sm w-full text-center">
        <h1 className="text-lg font-semibold text-card-foreground mb-2">
          Acesso negado
        </h1>
        <p className="text-sm text-muted-foreground">
          Você não tem permissão para acessar esta página.
        </p>
      </div>
    </div>
  )
}

