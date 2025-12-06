import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Phone, Smartphone, MessageSquare } from "lucide-react"
import type { Tariff } from "@/lib/tariff-calculator"

interface BestTariffResultProps {
  result: {
    tariff: Tariff
    estimatedPrice: number
    breakdown: {
      basePrice: number
      extraMinutes: number
      extraGb: number
      extraSms: number
    }
  }
}

export function BestTariffResult({ result }: BestTariffResultProps) {
  const { tariff, estimatedPrice, breakdown } = result

  return (
    <Card className="max-w-2xl mx-auto mb-12 border-4 border-purple-600 shadow-2xl bg-gradient-to-br from-purple-50 to-pink-50">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="h-6 w-6 text-purple-600" />
          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">Best Match</Badge>
        </div>
        <CardTitle className="text-3xl">{tariff.name}</CardTitle>
        <CardDescription className="text-base">Most cost-effective plan for your usage</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Total Price */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-purple-200">
          <p className="text-sm text-muted-foreground mb-1">Estimated Monthly Cost</p>
          <p className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {estimatedPrice.toFixed(2)} TJS
          </p>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-3">
          <p className="font-semibold text-sm uppercase text-muted-foreground">Price Breakdown</p>
          <div className="grid gap-3">
            <div className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm">
              <span className="text-sm text-muted-foreground">Base Price</span>
              <span className="font-semibold">{breakdown.basePrice.toFixed(2)} TJS</span>
            </div>
            {breakdown.extraMinutes > 0 && (
              <div className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm">
                <span className="text-sm text-muted-foreground">Extra Minutes</span>
                <span className="font-semibold text-purple-600">+{breakdown.extraMinutes.toFixed(2)} TJS</span>
              </div>
            )}
            {breakdown.extraGb > 0 && (
              <div className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm">
                <span className="text-sm text-muted-foreground">Extra GB</span>
                <span className="font-semibold text-pink-600">+{breakdown.extraGb.toFixed(2)} TJS</span>
              </div>
            )}
            {breakdown.extraSms > 0 && (
              <div className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm">
                <span className="text-sm text-muted-foreground">Extra SMS</span>
                <span className="font-semibold text-purple-600">+{breakdown.extraSms.toFixed(2)} TJS</span>
              </div>
            )}
          </div>
        </div>

        {/* Included Benefits */}
        <div className="space-y-3">
          <p className="font-semibold text-sm uppercase text-muted-foreground">What's Included</p>
          <div className="grid gap-3">
            <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
              <Phone className="h-5 w-5 text-purple-600" />
              <div>
                <p className="font-semibold">{tariff.included_minutes.toLocaleString()} Minutes</p>
                <p className="text-xs text-muted-foreground">Talk time included</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
              <Smartphone className="h-5 w-5 text-pink-600" />
              <div>
                <p className="font-semibold">{tariff.included_gb} GB Internet</p>
                <p className="text-xs text-muted-foreground">Data included</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
              <MessageSquare className="h-5 w-5 text-purple-600" />
              <div>
                <p className="font-semibold">{tariff.included_sms.toLocaleString()} SMS</p>
                <p className="text-xs text-muted-foreground">Text messages included</p>
              </div>
            </div>
          </div>
        </div>

        <Button
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-6 text-lg shadow-lg"
          size="lg"
        >
          Select This Tariff
        </Button>
      </CardContent>
    </Card>
  )
}
