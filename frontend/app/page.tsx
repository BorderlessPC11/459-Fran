import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { VehicleSummary } from "@/components/dashboard/vehicle-summary"
import { StatusChart } from "@/components/dashboard/status-chart"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <DashboardHeader />
      <main className="flex-1 px-4 py-4 flex flex-col gap-4 safe-bottom pb-8">
        <VehicleSummary />
        <StatusChart />
        <QuickActions />
      </main>
    </div>
  )
}
