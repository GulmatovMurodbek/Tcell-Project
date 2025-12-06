import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Рустам Каримов",
    role: "Владелец бизнеса",
    content: "Tcell изменил то, как я остаюсь на связи со своей командой. Покрытие просто отличное, даже в отдалённых районах Таджикистана. Настоятельно рекомендую!",
    rating: 5,
    avatar: "RK",
  },
  {
    name: "Мадина Саидова",
    role: "Студент",
    content: "Отличные тарифные планы для студентов! Я могу смотреть лекции и оставаться на связи с друзьями, не беспокоясь о балансе. Лучший выбор!",
    rating: 5,
    avatar: "MS",
  },
  {
    name: "Фаррух Назаров",
    role: "Разработчик программного обеспечения",
    content: "Скорость 4G просто невероятная. Идеально подходит для удалённой работы и видеозвонков. Служба поддержки всегда полезна и быстро отвечает.",
    rating: 5,
    avatar: "FN",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary text-primary rounded-full text-sm font-medium mb-4">
          Истории клиентов
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Любимо <span className="gradient-text">миллионами</span>
          </h2>
          <p className="text-muted-foreground text-lg">
          Посмотрите, что наши клиенты говорят о своём опыте с Tcell.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="group bg-background p-8 rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="w-12 h-12" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                "{review.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.role}</div>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
