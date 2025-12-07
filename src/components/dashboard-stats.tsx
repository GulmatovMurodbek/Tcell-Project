import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, AlertCircle, TrendingUp, Hash } from "lucide-react"

export function DashboardStats({ data }: { data: any }) {
  const stats = [
    {
      title: "Total Feedbacks",
      value: data?.total_feedbacks?.toString() || "0",
      icon: MessageSquare,
      gradient: "from-[#7A3EFF] to-[#9F5FFF]",
    },
    {
      title: "Internet Issues",
      value: data?.category_distribution?.["Интернет"]?.toString() || "0",
      icon: AlertCircle,
      gradient: "from-[#9F5FFF] to-[#C56FFF]",
    },
    {
      title: "Price Complaints",
      value: data?.category_distribution?.["Цена"]?.toString() || "0",
      icon: TrendingUp,
      gradient: "from-[#C56FFF] to-[#7A3EFF]",
    },
    {
      title: "Connection Issues",
      value: data?.category_distribution?.["Связь"]?.toString() || "0",
      icon: Hash,
      gradient: "from-[#7A3EFF] to-[#C56FFF]",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="relative overflow-hidden rounded-[24px] border-border/50 shadow-lg">
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5`} />
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <div
                className={`size-10 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}
              >
                <Icon className="size-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#7A3EFF] to-[#C56FFF] bg-clip-text text-transparent">
                {stat.value}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
