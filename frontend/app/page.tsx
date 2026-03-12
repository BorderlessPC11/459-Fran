"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { VehicleSummary } from "@/components/dashboard/vehicle-summary"
import { StatusChart } from "@/components/dashboard/status-chart"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { RequireAuth } from "../guards/RequireAuth"

export default function HomePage() {
  return (
    <RequireAuth>
      <div className="flex min-h-dvh flex-col bg-background">
        <DashboardHeader />
        <main className="flex-1 px-4 py-4 flex flex-col gap-4 safe-bottom pb-8">
          <VehicleSummary />
          <StatusChart />
          <QuickActions />
        </main>
      </div>
    </RequireAuth>
  )
}
