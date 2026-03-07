// app/(dashboard)/layout.tsx
// Layout utama untuk halaman-halaman dashboard (dengan sidebar)

import { Sidebar } from "@/components/layout/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#FEFAF0] to-[#F5EFE0]">
      <Sidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
