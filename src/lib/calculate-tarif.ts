import type { Tariff, Usage, CalculationResult } from "./tariff-calculator"

export function calculatePrice(tariff: Tariff, usage: Usage): CalculationResult {
  const extraMinutes = Math.max(0, usage.minutes - tariff.included_minutes)
  const extraGb = Math.max(0, usage.gb - Number.parseFloat(tariff.included_gb))
  const extraSms = Math.max(0, usage.sms - tariff.included_sms)

  const basePrice = Number.parseFloat(tariff.price)
  const extraMinutesCost = extraMinutes * Number.parseFloat(tariff.extra_minute_price)
  const extraGbCost = extraGb * Number.parseFloat(tariff.extra_gb_price)
  const extraSmsCost = extraSms * Number.parseFloat(tariff.extra_sms_price)

  const total = basePrice + extraMinutesCost + extraGbCost + extraSmsCost

  return {
    total,
    breakdown: {
      basePrice,
      extraMinutes: extraMinutesCost,
      extraGb: extraGbCost,
      extraSms: extraSmsCost,
    },
  }
}
