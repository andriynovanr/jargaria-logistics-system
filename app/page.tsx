// app/page.tsx
// Root page — redirect ke halaman login

import { redirect } from "next/navigation"

export default function RootPage() {
  redirect("/login")
}
