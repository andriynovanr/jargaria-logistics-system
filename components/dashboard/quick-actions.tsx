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
      <h2 className="text-lg font-extrabold text-[#2C1810] uppercase tracking-wide">
        Quick Actions
      </h2>

      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-5">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex flex-col items-center gap-3 border-[3px] border-black bg-white px-4 py-6 text-center shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_#000]"
          >
            <div className="flex items-center justify-center size-14 border-[2px] border-black bg-[#FFF8E7] text-[#3D2314] shadow-[2px_2px_0_0_#D4A843]">
              <action.icon className="size-7" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-bold text-[#2C1810]">
              {action.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
