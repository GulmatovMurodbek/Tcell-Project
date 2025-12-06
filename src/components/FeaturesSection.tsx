import { Zap, DollarSign, BarChart3, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Быстрый мобильный интернет",
    description: "Испытайте молниеносную скорость 4G LTE по всей стране. Смотрите, скачивайте и просматривайте без ограничений.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: DollarSign,
    title: "Доступные цены",
    description: "Получайте максимальную выгоду благодаря нашим конкурентным тарифам. Качественный сервис не обязан быть дорогим.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Контроль расходов",
    description: "Отслеживайте своё потребление в режиме реального времени через наше умное приложение. Держите расходы под контролем.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Наша команда всегда готова помочь. Получайте помощь в любое время и в любом месте.",
    color: "from-tcell-purple to-accent",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-card relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 gradient-primary" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1.5 bg-secondary text-primary rounded-full text-sm font-medium mb-4">
          Почему выбирают нас
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Всё, что вам нужно в{" "}
            <span className="gradient-text">мобильном операторе</span>
          </h2>
          <p className="text-muted-foreground text-lg">
          Мы объединяем передовые технологии с непревзойдёнными ценами, чтобы предоставить вам лучший мобильный опыт.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-background p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
