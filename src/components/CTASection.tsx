import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Без скрытых платежей",
  "Отмена в любое время",
  "Круглосуточная поддержка клиентов",
  "Покрытие по всей стране",
];


const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary-foreground/30 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary-foreground/30 rounded-full animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">
              Предложение ограничено во времени
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
          Присоединяйтесь к Tcell сегодня
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Начните пользоваться лучшей мобильной сетью в Таджикистане. Перейдите сейчас и получите первый месяц бесплатно!
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <div className="w-5 h-5 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl group"
            >
              Начать прямо сейчас
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
            >
              Связаться с отделом продаж
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
