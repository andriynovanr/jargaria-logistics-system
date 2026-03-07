// components/dashboard/quick-actions.tsx
// Tombol aksi cepat (Buat Batch, Input Paket, Scan QR, dll.)

import Link from "next/link"
import { Plus, ClipboardEdit, QrCode, List } from "lucide-react"

const actions = [
  {
    label: "Buat Batch Baru",
    href: "/batch-pengiriman/baru",
    icon: Plus,
  },
  {
    label: "Input Paket Baru",
    href: "/paket/baru",
    icon: ClipboardEdit,
  },
  {
    label: "Scan QR Code",
    href: "/scan",
    icon: QrCode,
  },
  {
    label: "Lihat Semua Batch",
    href: "/batch-pengiriman",
    icon: List,
  },
]

export function QuickActions() {
  return (
    <section>
      <h2 className="text-lg font-bold text-[#2C1810]">
        Quick Actions
      </h2>

      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-5">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-[#E8DCC8] bg-white px-4 py-6 text-center shadow-sm transition-all duration-200 hover:shadow-lg hover:shadow-amber-900/5 hover:border-[#D4A843]/50 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-[#FFF8E7] to-[#FFF1D0] text-[#3D2314] transition-transform duration-200 group-hover:scale-105">
              <action.icon className="size-6" strokeWidth={1.8} />
            </div>
            <span className="text-sm font-semibold text-[#2C1810]">
              {action.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
