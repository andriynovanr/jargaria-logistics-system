// app/(dashboard)/dashboard/page.tsx
// Halaman utama Dashboard Overview

import { Calendar } from "lucide-react"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { AlertsSection } from "@/components/dashboard/alerts-section"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"

function getTodayFormatted(): string {
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ]
  const now = new Date()
  return `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`
}

export default function DashboardPage() {
  const today = getTodayFormatted()

  return (
    <div className="px-8 py-6 space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#2C1810]">
            Dashboard Overview
          </h1>
          <p className="mt-1 text-sm text-[#8B6914]/60">
            Selamat datang kembali, berikut ringkasan ekspedisi hari ini.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-[#E8DCC8] bg-white px-4 py-2 text-sm font-medium text-[#2C1810] shadow-sm">
          <Calendar className="size-4 text-[#D4A843]" />
          {today}
        </div>
      </div>

      {/* Statistik */}
      <StatsCards />

      {/* Aksi Cepat */}
      <QuickActions />

      {/* Alerts & Transaksi Terbaru */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2">
          <AlertsSection />
        </div>
        <div className="lg:col-span-3">
          <RecentTransactions />
        </div>
      </div>
    </div>
  )
}
