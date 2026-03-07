// components/layout/sidebar.tsx
// Sidebar navigasi utama untuk halaman dashboard

"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Truck,
  Users,
  Package,
  FileText,
  Settings,
  User,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { APP_NAME } from "@/lib/constants"

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Batch Pengiriman", href: "/batch-pengiriman", icon: Truck },
  { label: "Pelanggan", href: "/pelanggan", icon: Users },
  { label: "Paket", href: "/paket", icon: Package },
  { label: "Laporan", href: "/laporan", icon: FileText },
  { label: "Pengaturan", href: "/pengaturan", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex flex-col w-64 min-h-screen bg-[#3D2314] border-r-[3px] border-black">
      {/* Logo & Brand */}
      <div className="flex items-center gap-3 px-5 pt-6 pb-8">
        <div className="border-[3px] border-black shadow-[3px_3px_0_0_#000] overflow-hidden">
          <Image
            src="/logo-jargaria.png"
            alt={APP_NAME}
            width={52}
            height={52}
            className="block"
          />
        </div>
        <div className="leading-tight">
          <p className="text-base font-extrabold text-[#F5E6C8] tracking-wider">
            JARGARIA
          </p>
          <p className="text-xs font-bold text-[#D4A843] tracking-wide">
            EKSPEDISI
          </p>
        </div>
      </div>

      {/* Navigasi */}
      <nav className="flex-1 px-3 space-y-1.5">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/")

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 text-sm font-bold transition-all",
                isActive
                  ? "bg-[#D4A843] text-[#3D2314] border-[2px] border-black shadow-[3px_3px_0_0_#000]"
                  : "text-[#F5E6C8]/80 hover:bg-[#5A3825] hover:text-[#F5E6C8] border-2 border-transparent"
              )}
            >
              <item.icon className="size-5 shrink-0" strokeWidth={2.5} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Profil User */}
      <div className="px-4 py-4 border-t-[2px] border-[#5A3825]">
        <div className="flex items-center gap-3">
          <div className="size-10 border-[2px] border-black bg-[#5A3825] flex items-center justify-center shrink-0 shadow-[2px_2px_0_0_#000]">
            <User className="size-5 text-[#D4A843]" strokeWidth={2.5} />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-[#F5E6C8] truncate">
              Admin Pusat
            </p>
            <p className="text-xs font-medium text-[#F5E6C8]/60 truncate">
              admin@jargaria.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}
