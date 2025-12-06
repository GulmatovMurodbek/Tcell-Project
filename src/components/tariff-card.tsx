import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Smartphone, MessageSquare } from "lucide-react"
import type { Tariff } from "@/lib/tariff-calculator"

interface TariffCardProps {
  tariff: Tariff
}

export function TariffCard({ tariff }: TariffCardProps) {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-2xl">{tariff.name}</CardTitle>
          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">{tariff.price} TJS</Badge>
        </div>
        <CardDescription>Ежемесячная базовая цена</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4 text-purple-600" />
              Минуты
            </span>
            <span className="font-semibold">{tariff.included_minutes.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Smartphone className="h-4 w-4 text-pink-600" />
              Интернет
            </span>
            <span className="font-semibold">{tariff.included_gb} GB</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <MessageSquare className="h-4 w-4 text-purple-600" />
              СМС
            </span>
            <span className="font-semibold">{tariff.included_sms.toLocaleString()}</span>
          </div>
        </div>
        <div className="pt-4 border-t space-y-2">
          <p className="text-xs text-muted-foreground font-semibold uppercase">Extra Usage</p>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div>
              <p className="text-muted-foreground">Min</p>
              <p className="font-semibold">{tariff.extra_minute_price} TJS</p>
            </div>
            <div>
              <p className="text-muted-foreground">GB</p>
              <p className="font-semibold">{tariff.extra_gb_price} TJS</p>
            </div>
            <div>
              <p className="text-muted-foreground">SMS</p>
              <p className="font-semibold">{tariff.extra_sms_price} TJS</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
