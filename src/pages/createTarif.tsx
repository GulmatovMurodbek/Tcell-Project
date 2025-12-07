"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { TariffCard } from "@/components/tariff-card";
import { BestTariffResult } from "@/components/best-tariff-results";
import { calculatePrice } from "@/lib/tariff-calculator";
import type { Tariff } from "@/lib/tariff-calculator";
import { Phone, Smartphone, MessageSquare, Search } from "lucide-react";
import axios from "axios";

export default function TariffCalculator() {
  const [minutes, setMinutes] = useState<string>("");
  const [gb, setGb] = useState<string>("");
  const [sms, setSms] = useState<string>("");
  const [bestTariff, setBestTariff] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [tarif, setTarif] = useState<Tariff[]>([]);
 
  const activeTariffs = tarif?.length ? tarif.filter((t) => t.active) : [];

  const filteredTariffs = activeTariffs.filter((tariff) => {
    const matchesSearch = tariff.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const price = Number.parseFloat(tariff.price);
    const matchesMinPrice = !minPrice || price >= Number.parseFloat(minPrice);
    const matchesMaxPrice = !maxPrice || price <= Number.parseFloat(maxPrice);
    return matchesSearch && matchesMinPrice && matchesMaxPrice;
  });

  const handleCalculate = () => {
    const usage = {
      minutes: Number.parseInt(minutes) || 0,
      gb: Number.parseFloat(gb) || 0,
      sms: Number.parseInt(sms) || 0,
    };

    let best = null;
    let lowestPrice = Number.POSITIVE_INFINITY;

    activeTariffs.forEach((tariff) => {
      const result = calculatePrice(tariff, usage);
      if (result.total < lowestPrice) {
        lowestPrice = result.total;
        best = {
          tariff,
          estimatedPrice: result.total,
          breakdown: result.breakdown,
        };
      }
    });

    setBestTariff(best);
  };
  async function getTarifs() {
    try {
      const response = await axios.get("http://157.180.29.248:9005/tariff/list/");
      console.log("Tariffs API response:", response.data);
      setTarif(response.data?.data || response.data || []);
    } catch (error) {
      console.error("Error fetching tariffs:", error);
      setTarif([]); // default array барои пешгирӣ аз хатогӣ
    }
  }
 
  useEffect(() => {
    getTarifs()
  },[]);
  return (
    <div className="min-h-screen mt-[80px] bg-gradient-to-br from-purple-600  to-purple-700">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 border-white/30">
          Калькулятор тарифов Tcell
        </Badge>
        <h1 className="text-5xl font-bold text-white mb-4 text-balance">
          Найдите идеальный тариф Tcell для себя
        </h1>
        <p className="text-xl text-white/90 mb-8 text-balance max-w-2xl mx-auto">
          Введите ваше ежемесячное использование и узнайте, какой тариф
          предлагает наилучшее соотношение цены и качества для ваших нужд
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        {/* Usage Input Card */}
        <Card className="max-w-2xl mx-auto mb-12 shadow-2xl border-0">
          <CardHeader>
            <CardTitle className="text-2xl">
              Рассчитайте свой лучший тариф
            </CardTitle>
            <CardDescription>
              Введите свои типичные ежемесячные показатели ниже
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="minutes" className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-purple-600" />
                  Минуты в месяц
                </Label>
                <Input
                  id="minutes"
                  type="number"
                  placeholder="Enter minutes"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  min="0"
                  className="border-purple-200 focus-visible:ring-purple-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gb" className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-pink-600" />
                  Гигабайты в месяц
                </Label>
                <Input
                  id="gb"
                  type="number"
                  placeholder="Enter GB"
                  value={gb}
                  onChange={(e) => setGb(e.target.value)}
                  min="0"
                  step="0.1"
                  className="border-pink-200 focus-visible:ring-pink-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sms" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-purple-600" />
                  СМС в месяц
                </Label>
                <Input
                  id="sms"
                  type="number"
                  placeholder="Enter SMS"
                  value={sms}
                  onChange={(e) => setSms(e.target.value)}
                  min="0"
                  className="border-purple-200 focus-visible:ring-purple-600"
                />
              </div>
            </div>
            <Button
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-6 text-lg shadow-lg"
              size="lg"
            >
              Рассчитать лучший тариф
            </Button>
          </CardContent>
        </Card>

        {/* Best Tariff Result */}
        {bestTariff && <BestTariffResult result={bestTariff} />}

        {/* Filters */}
        <Card className="max-w-6xl mx-auto mb-8 shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-xl">
              Просмотреть все активные тарифы
            </CardTitle>
            <CardDescription>
              Отфильтруйте и сравните доступные тарифы
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="search" className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Поиск по названию
                </Label>
                <Input
                  id="search"
                  type="text"
                  placeholder="Search tariffs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="minPrice">Min Price (TJS)</Label>
                <Input
                  id="minPrice"
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  min="0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxPrice">Max Price (TJS)</Label>
                <Input
                  id="maxPrice"
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  min="0"
                />
              </div>
              <div className="flex items-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setMinPrice("");
                    setMaxPrice("");
                  }}
                  className="w-full"
                >
                  Сбросить фильтры
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tariff Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTariffs.map((tariff) => (
              <TariffCard key={tariff.id} tariff={tariff} />
            ))}
          </div>
          {filteredTariffs.length === 0 && (
            <Card className="text-center py-12 shadow-xl border-0">
              <CardContent>
                <p className="text-muted-foreground">
                  No tariffs match your filters. Try adjusting your search
                  criteria.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
