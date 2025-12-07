import { useEffect, useState } from "react"
import { DashboardStats } from "@/components/dashboard-stats"
import { CategoryChart } from "@/components/category-charts"
import { WordFrequencyPie } from "@/components/word-frequency-charts"
import { ComplaintsTable } from "@/components/comlaints-table"

export default function DashboardPage() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://157.180.29.248:9005/feedback/export/", {
          cache: "no-store",
        })
        if (!response.ok) throw new Error("Failed to fetch feedback data")
        const json = await response.json()
        setData(json)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (!data) return <div>Error loading data</div>

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-[#7A3EFF] to-[#C56FFF] bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-muted-foreground mt-1">Обзор аналитики и статистики отзывов</p>
      </div>

      <DashboardStats data={data} />

      <div className="grid gap-6 md:grid-cols-2">
        <CategoryChart data={data} />
        <WordFrequencyPie data={data} />
      </div>

      <ComplaintsTable data={data} />
    </div>
  )
}
