// components/dashboard/alerts-section.tsx
// Bagian peringatan / notifikasi penting

import { cn } from "@/lib/utils"

type AlertPriority = "high" | "warning" | "check"

interface Alert {
  id: string
  title: string
  priority: AlertPriority
  customer: string
  detail: string
}

const alerts: Alert[] = [
  {
    id: "1",
    title: "Invoice #402 Overdue",
    priority: "high",
    customer: "PT Sinar Jaya Abadi",
    detail: "2 days late",
  },
  {
    id: "2",
    title: "Unpaid Shipment",
    priority: "warning",
    customer: "Bpk. Haryanto",
    detail: "Due today",
  },
  {
    id: "3",
    title: "Weight Mismatch",
    priority: "check",
    customer: "Batch #2023-X19",
    detail: "Discrepancy: 5kg",
  },
]

const priorityConfig: Record<
  AlertPriority,
  { label: string; badge: string; border: string }
> = {
  high: {
    label: "High Priority",
    badge: "bg-red-500 text-white",
    border: "border-l-red-500",
  },
  warning: {
    label: "Warning",
    badge: "bg-amber-500 text-white",
    border: "border-l-amber-500",
  },
  check: {
    label: "Check Immediately",
    badge: "bg-yellow-400 text-[#2C1810]",
    border: "border-l-yellow-400",
  },
}

export function AlertsSection() {
  const urgentCount = alerts.length

  return (
    <section>
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-extrabold text-[#2C1810] uppercase tracking-wide">
          Alerts
        </h2>
        <span className="border-[2px] border-black bg-red-500 px-2.5 py-0.5 text-xs font-extrabold text-white shadow-[2px_2px_0_0_#000]">
          {urgentCount} Urgent
        </span>
      </div>

      <div className="mt-3 space-y-3">
        {alerts.map((alert) => {
          const config = priorityConfig[alert.priority]

          return (
            <div
              key={alert.id}
              className={cn(
                "border-[3px] border-black border-l-[5px] bg-white p-4 shadow-[3px_3px_0_0_#000]",
                config.border
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-extrabold text-[#2C1810]">
                    {alert.title}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-[#8B6914]/70">
                    Customer: {alert.customer}
                  </p>
                </div>
                <span
                  className={cn(
                    "shrink-0 border-[2px] border-black px-2 py-0.5 text-[10px] font-extrabold shadow-[2px_2px_0_0_#000]",
                    config.badge
                  )}
                >
                  {config.label}
                </span>
              </div>
              <p className="mt-2 flex items-center gap-1 text-xs font-medium text-[#8B6914]/60">
                <span>⏱</span> {alert.detail}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
