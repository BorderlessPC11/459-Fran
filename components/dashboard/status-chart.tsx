"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { ChevronLeft, ChevronRight, BarChart3 } from "lucide-react"
import { useState } from "react"

const statusData = [
  { name: "Em andamento", value: 7, color: "#3b82f6" },
  { name: "Concluidos", value: 6, color: "#22c55e" },
  { name: "Aguardando", value: 1, color: "#f59e0b" },
  { name: "Cancelado", value: 1, color: "#ef4444" },
]

const total = statusData.reduce((sum, item) => sum + item.value, 0)

const RADIAN = Math.PI / 180
function renderCustomLabel({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  percent: number
}) {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  if (percent < 0.05) return null

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-xs font-semibold"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  )
}

export function StatusChart() {
  const [showChart, setShowChart] = useState(true)

  return (
    <div className="rounded-xl bg-card p-4 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-card-foreground">
          Status dos atendimentos
        </h3>
        <button
          onClick={() => setShowChart(!showChart)}
          className="text-muted-foreground"
          aria-label="Alternar visualizacao"
        >
          <BarChart3 className="h-4 w-4" />
        </button>
      </div>

      {/* Status list */}
      <div className="flex flex-col gap-1.5 mb-3">
        {statusData.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-card-foreground">{item.name}</span>
            </div>
            <span className="font-medium text-card-foreground">{item.value}</span>
          </div>
        ))}
      </div>

      {showChart && (
        <div className="flex items-center justify-center gap-2">
          <button className="text-muted-foreground" aria-label="Anterior">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="h-[160px] w-[160px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomLabel}
                  outerRadius={75}
                  dataKey="value"
                  stroke="none"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <button className="text-muted-foreground" aria-label="Proximo">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}
