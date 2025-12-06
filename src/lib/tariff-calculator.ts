export interface Tariff {
    id: number // Database returns integer id
    name: string
    price: string // Decimal as string
    included_minutes: number
    included_gb: string // Decimal as string
    included_sms: number
    extra_minute_price: string // Decimal as string
    extra_gb_price: string // Decimal as string
    extra_sms_price: string // Decimal as string
    active: boolean
    created_at: string // ISO datetime string
  }
  
  export interface Usage {
    minutes: number
    gb: number
    sms: number
  }
  
  export interface CalculationResult {
    total: number
    breakdown: {
      basePrice: number
      extraMinutes: number
      extraGb: number
      extraSms: number
    }
  }
  
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
  