"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft, MoreHorizontal } from "lucide-react"

interface MobileShellProps {
  children: React.ReactNode
  title: string
  showBack?: boolean
  showMore?: boolean
  headerGradient?: boolean
  onBack?: () => void
}

export function MobileShell({
  children,
  title,
  showBack = false,
  showMore = false,
  headerGradient = false,
  onBack,
}: MobileShellProps) {
  const router = useRouter()

  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      router.back()
    }
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      {/* iOS-style header */}
      <header
        className={`sticky top-0 z-50 safe-top ${
          headerGradient
            ? "ios-header-gradient text-primary-foreground"
            : "bg-card text-card-foreground border-b border-border"
        }`}
      >
        <div className="flex h-11 items-center justify-between px-4">
          <div className="w-10">
            {showBack && (
              <button
                onClick={handleBack}
                className="flex items-center -ml-1"
                aria-label="Voltar"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}
          </div>
          <h1 className="text-base font-semibold text-balance">{title}</h1>
          <div className="w-10 flex justify-end">
            {showMore && (
              <button aria-label="Mais opcoes">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto safe-bottom">{children}</main>
    </div>
  )
}
