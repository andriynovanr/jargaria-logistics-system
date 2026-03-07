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
    <aside className="flex flex-col w-64 min-h-screen bg-gradient-to-b from-[#3D2314] to-[#2C1810]">
      {/* Logo & Brand */}
      <div className="flex items-center gap-3 px-5 pt-6 pb-8">
        <div className="rounded-2xl overflow-hidden shadow-lg shadow-black/30 ring-2 ring-[#D4A843]/30">
          <Image
            src="/logo-jargaria.png"
            alt={APP_NAME}
            width={52}
            height={52}
            className="block"
          />
        </div>
        <div className="leading-tight">
          <p className="text-base font-bold text-[#F5E6C8] tracking-wider">
            JARGARIA
          </p>
          <p className="text-xs font-semibold text-[#D4A843] tracking-wide">
            EKSPEDISI
          </p>
        </div>
      </div>

      {/* Navigasi */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/")

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-[#D4A843] text-[#3D2314] shadow-md shadow-[#D4A843]/30"
                  : "text-[#F5E6C8]/70 hover:bg-white/10 hover:text-[#F5E6C8]"
              )}
            >
              <item.icon className="size-5 shrink-0" strokeWidth={isActive ? 2.5 : 2} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Profil User */}
      <div className="px-4 py-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-[#5A3825] flex items-center justify-center shrink-0 ring-2 ring-[#D4A843]/20">
            <User className="size-5 text-[#D4A843]" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-[#F5E6C8] truncate">
              Admin Pusat
            </p>
            <p className="text-xs text-[#F5E6C8]/50 truncate">
              admin@jargaria.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}
