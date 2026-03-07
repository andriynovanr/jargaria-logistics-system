// components/dashboard/stats-cards.tsx
// Kartu statistik ringkasan (Batch Aktif, Menunggu Pembayaran, dll.)

import {
  ClipboardList,
  FileWarning,
  TrendingUp,
  Weight,
} from "lucide-react"

const stats = [
  {
    label: "BATCH AKTIF",
    value: "1",
    subtitle: "Updated just now",
    subtitleIcon: "clock",
    accentColor: "bg-[#3D2314]",
    icon: ClipboardList,
    iconColor: "text-[#F5E6C8]",
  },
  {
    label: "MENUNGGU PEMBAYARAN",
    value: "7",
    subtitle: "Action needed",
    subtitleIcon: "warning",
    accentColor: "bg-[#D4A843]",
    icon: FileWarning,
    iconColor: "text-[#3D2314]",
  },
  {
    label: "PENDAPATAN BULAN INI",
    value: "Rp 46.250.000",
    subtitle: "+12% vs last month",
    subtitleIcon: "trending",
    accentColor: "bg-[#D4A843]/20",
    icon: TrendingUp,
    iconColor: "text-[#D4A843]",
    highlight: true,
  },
  {
    label: "TOTAL BERAT",
    value: "1.850 kg",
    subtitle: "Across all batches",
    subtitleIcon: "weight",
    accentColor: "bg-[#D4A843]",
    icon: Weight,
    iconColor: "text-[#3D2314]",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`relative overflow-hidden border-[3px] border-black bg-white shadow-[4px_4px_0_0_#000] ${
            stat.highlight ? "bg-[#FFF8E1]" : ""
          }`}
        >
          <div className="flex items-stretch">
            {/* Konten utama */}
            <div className="flex-1 p-4">
              <p className="text-[10px] font-extrabold tracking-wider text-[#8B6914] uppercase">
                {stat.label}
              </p>
              <p className="mt-1 text-2xl font-extrabold text-[#2C1810]">
                {stat.value}
              </p>
              <p className="mt-1 flex items-center gap-1 text-xs font-medium text-[#8B6914]/70">
                {stat.subtitleIcon === "trending" && (
                  <span className="text-green-600 font-bold">↑</span>
                )}
                {stat.subtitleIcon === "warning" && (
                  <span className="text-amber-500 font-bold">!</span>
                )}
                {stat.subtitleIcon === "clock" && (
                  <span className="text-[#8B6914]/50">⏱</span>
                )}
                {stat.subtitleIcon === "weight" && (
                  <span className="text-[#8B6914]/50">⚖</span>
                )}
                {stat.subtitle}
              </p>
            </div>

            {/* Ikon aksen */}
            <div
              className={`flex items-center justify-center w-16 border-l-[3px] border-black ${stat.accentColor}`}
            >
              <stat.icon className={`size-7 ${stat.iconColor}`} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
