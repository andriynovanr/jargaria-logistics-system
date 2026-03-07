// components/dashboard/recent-transactions.tsx
// Tabel transaksi terbaru

import Link from "next/link"
import { cn } from "@/lib/utils"

type TransactionStatus = "lunas" | "pending" | "gagal"

interface Transaction {
  id: string
  date: string
  customerName: string
  transactionId: string
  amount: string
  status: TransactionStatus
}

const transactions: Transaction[] = [
  {
    id: "1",
    date: "Oct 24, 2023",
    customerName: "Ibu Sarah Wijaya",
    transactionId: "TRX-00921",
    amount: "Rp 1.250.000",
    status: "lunas",
  },
  {
    id: "2",
    date: "Oct 24, 2023",
    customerName: "Toko Mas Abadi",
    transactionId: "TRX-00920",
    amount: "Rp 3.800.000",
    status: "pending",
  },
  {
    id: "3",
    date: "Oct 23, 2023",
    customerName: "Bpk. Rudiman",
    transactionId: "TRX-00919",
    amount: "Rp 750.000",
    status: "lunas",
  },
  {
    id: "4",
    date: "Oct 23, 2023",
    customerName: "CV Maju Terus",
    transactionId: "TRX-00918",
    amount: "Rp 5.200.000",
    status: "lunas",
  },
  {
    id: "5",
    date: "Oct 22, 2023",
    customerName: "Ibu Lilis Suryani",
    transactionId: "TRX-00917",
    amount: "Rp 900.000",
    status: "gagal",
  },
]

const statusConfig: Record<
  TransactionStatus,
  { label: string; dot: string; text: string }
> = {
  lunas: {
    label: "Lunas",
    dot: "bg-green-500",
    text: "text-green-700",
  },
  pending: {
    label: "Pending",
    dot: "bg-amber-500",
    text: "text-amber-700",
  },
  gagal: {
    label: "Gagal",
    dot: "bg-red-500",
    text: "text-red-700",
  },
}

export function RecentTransactions() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#2C1810]">
          Recent Transactions
        </h2>
        <Link
          href="/laporan"
          className="text-sm font-medium text-[#D4A843] hover:text-[#8B6914] transition-colors"
        >
          View All
        </Link>
      </div>

      <div className="mt-3 overflow-hidden rounded-2xl border border-[#E8DCC8] bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#E8DCC8] bg-gradient-to-r from-[#FFF8E7] to-[#FFF4DC]">
              <th className="px-5 py-3.5 text-left font-semibold text-[#2C1810]">
                Date
              </th>
              <th className="px-5 py-3.5 text-left font-semibold text-[#2C1810]">
                Customer / ID
              </th>
              <th className="px-5 py-3.5 text-right font-semibold text-[#2C1810]">
                Amount
              </th>
              <th className="px-5 py-3.5 text-center font-semibold text-[#2C1810]">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0E8D8]">
            {transactions.map((trx) => {
              const config = statusConfig[trx.status]

              return (
                <tr
                  key={trx.id}
                  className="transition-colors hover:bg-[#FFF8E7]/50"
                >
                  <td className="px-5 py-3.5 text-[#8B6914]/70 whitespace-nowrap">
                    {trx.date}
                  </td>
                  <td className="px-5 py-3.5">
                    <p className="font-medium text-[#2C1810]">
                      {trx.customerName}
                    </p>
                    <p className="text-xs text-[#8B6914]/60">
                      {trx.transactionId}
                    </p>
                  </td>
                  <td className="px-5 py-3.5 text-right font-medium text-[#2C1810] whitespace-nowrap">
                    {trx.amount}
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center justify-center gap-1.5">
                      <span
                        className={cn("size-2 rounded-full", config.dot)}
                      />
                      <span className={cn("text-xs font-medium", config.text)}>
                        {config.label}
                      </span>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
