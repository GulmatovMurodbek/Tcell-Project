import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Phone, Wifi, MessageSquare, Sparkles } from "lucide-react";

const TariffCalculator = () => {
  const [minutes, setMinutes] = useState([300]);
  const [data, setData] = useState([10]);
  const [sms, setSms] = useState([50]);

  const recommendedTariff = useMemo(() => {
    const totalUsage = minutes[0] / 100 + data[0] * 2 + sms[0] / 20;
    
    if (totalUsage <= 10) {
      return { name: "Starter", price: 4.99, description: "Perfect for light users" };
    } else if (totalUsage <= 25) {
      return { name: "Standard", price: 9.99, description: "Great for everyday use" };
    } else if (totalUsage <= 40) {
      return { name: "Premium", price: 19.99, description: "For power users" };
    } else {
      return { name: "Unlimited", price: 29.99, description: "No limits, no worries" };
    }
  }, [minutes, data, sms]);

  return (
    <section id="calculator" className="py-24 gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-tcell-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          Умный калькулятор
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Найдите свой <span className="gradient-text">идеальный тариф</span>
          </h2>
          <p className="text-muted-foreground text-lg">
          Расскажите нам о вашем использовании, и мы порекомендуем вам лучший тариф.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Calculator Controls */}
            <div className="lg:col-span-3 bg-card p-8 rounded-3xl shadow-card">
              <div className="space-y-10">
                {/* Minutes Slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">Минуты</span>
                    </div>
                    <span className="text-2xl font-bold gradient-text">{minutes[0]}</span>
                  </div>
                  <Slider
                    value={minutes}
                    onValueChange={setMinutes}
                    max={1000}
                    min={0}
                    step={50}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>0 min</span>
                    <span>1000 min</span>
                  </div>
                </div>

                {/* Data Slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                        <Wifi className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-medium">Mobile Data</span>
                    </div>
                    <span className="text-2xl font-bold gradient-text">{data[0]} GB</span>
                  </div>
                  <Slider
                    value={data}
                    onValueChange={setData}
                    max={50}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1 GB</span>
                    <span>50 GB</span>
                  </div>
                </div>

                {/* SMS Slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="font-medium">SMS</span>
                    </div>
                    <span className="text-2xl font-bold gradient-text">{sms[0]}</span>
                  </div>
                  <Slider
                    value={sms}
                    onValueChange={setSms}
                    max={500}
                    min={0}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>0 SMS</span>
                    <span>500 SMS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Tariff */}
            <div className="lg:col-span-2">
              <div className="sticky top-32 gradient-primary p-8 rounded-3xl text-primary-foreground shadow-glow">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-medium opacity-90">Рекомендовано для вас</span>
                </div>

                <h3 className="text-3xl font-bold mb-2">{recommendedTariff.name}</h3>
                <p className="text-primary-foreground/80 mb-6">{recommendedTariff.description}</p>

                <div className="mb-8">
                  <span className="text-5xl font-bold">${recommendedTariff.price}</span>
                  <span className="text-primary-foreground/80">/month</span>
                </div>

                <div className="space-y-3 mb-8 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>{minutes[0]} minutes included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>{data[0]} GB high-speed data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>{sms[0]} SMS messages</span>
                  </div>
                </div>

                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Выбрать этот тариф
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TariffCalculator;
