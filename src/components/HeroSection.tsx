import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Wifi, Signal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero pt-20 overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-10 w-64 h-64 bg-tcell-purple/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-tcell-purple rounded-full animate-float opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-float-delayed opacity-60" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-tcell-purple-light rounded-full animate-float-slow opacity-60" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-card">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
              #1 Мобильный оператор в Таджикистане
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Лучший{" "}
              <span className="gradient-text">мобильный опыт</span>{" "}
              начинается с выбора Tcell.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            Подключайтесь к сети, которая всегда с вами. Сверхбыстрая скорость, доступные тарифы и покрытие, охватывающее каждый уголок.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
              Начать
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="lg">
              Посмотреть все тарифы
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold gradient-text">5M+</div>
                <div className="text-sm text-muted-foreground">Довольные клиенты</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-muted-foreground">Покрытие сети</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">4G/LTE</div>
                <div className="text-sm text-muted-foreground">Максимальная скорость</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-fade-up-delayed">
            <div className="relative">
              <div className="relative w-72 h-[500px] bg-gradient-to-br from-card to-secondary rounded-[3rem] p-3 shadow-2xl shadow-tcell-purple/20 animate-float">
                <div className="w-full h-full bg-gradient-to-br from-tcell-purple to-accent rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="text-center space-y-4 p-6">
                    <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl mx-auto flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-primary-foreground font-bold text-xl">Tcell</div>
                    <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
                      <Signal className="w-4 h-4" />
                      <span className="text-sm">Полный сигнал</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
                      <Wifi className="w-4 h-4" />
                      <span className="text-sm">4G LTE</span>
                    </div>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-card rounded-full" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-16 top-20 glass-card p-4 rounded-2xl shadow-card animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Безлимитный трафик</div>
                    <div className="text-xs text-muted-foreground">От 9,99 сомони в месяц</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-32 glass-card p-4 rounded-2xl shadow-card animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Сеть активна</div>
                    <div className="text-xs text-muted-foreground">99,9% времени работы</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
