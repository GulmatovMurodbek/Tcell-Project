import { useState } from "react";
import { Star, Send, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
}

const existingReviews: Review[] = [
  {
    id: 1,
    name: "Алишер М.",
    rating: 5,
    date: "28 ноября 2024",
    text: "Отличный сервис! Быстрый интернет и доступные цены. Пользуюсь Tcell уже 3 года и очень доволен качеством связи.",
  },
  {
    id: 2,
    name: "Мадина К.",
    rating: 4,
    date: "25 ноября 2024",
    text: "Хорошее покрытие по всей стране. Служба поддержки отвечает быстро и помогает решить любые вопросы.",
  },
  {
    id: 3,
    name: "Фаррух Т.",
    rating: 5,
    date: "20 ноября 2024",
    text: "Лучший оператор в Таджикистане! Тарифы прозрачные, скрытых платежей нет. Рекомендую всем!",
  },
];

const StarRating = ({
  rating,
  onRatingChange,
  interactive = false,
}: {
  rating: number;
  onRatingChange?: (rating: number) => void;
  interactive?: boolean;
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          className={`transition-all duration-200 ${
            interactive ? "cursor-pointer hover:scale-110" : "cursor-default"
          }`}
          onMouseEnter={() => interactive && setHoverRating(star)}
          onMouseLeave={() => interactive && setHoverRating(0)}
          onClick={() => interactive && onRatingChange?.(star)}
        >
          <Star
            size={interactive ? 28 : 18}
            className={`${
              (hoverRating || rating) >= star
                ? "fill-yellow-400 text-yellow-400"
                : "text-muted-foreground/30"
            } transition-colors duration-200`}
          />
        </button>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-start justify-between mb-4">
      <div>
        <h4 className="font-semibold text-foreground">{review.name}</h4>
        <p className="text-sm text-muted-foreground">{review.date}</p>
      </div>
      <StarRating rating={review.rating} />
    </div>
    <p className="text-muted-foreground leading-relaxed">{review.text}</p>
  </div>
);

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    rating: 0,
    text: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.rating || !formData.text) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }

    if (!formData.consent) {
      toast.error("Пожалуйста, дайте согласие на использование отзыва");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Спасибо за ваш отзыв!", {
      description: "Мы ценим ваше мнение и используем его для улучшения сервиса.",
    });

    setFormData({
      name: "",
      phone: "",
      rating: 0,
      text: "",
      consent: false,
    });
    setIsSubmitting(false);
  };

  const scrollToForm = () => {
    document.getElementById("feedback-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-tcell-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-tcell-glow/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Обратная связь</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Ваше мнение</span>
              <br />
              <span className="text-foreground">важно для нас</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Поделитесь своим опытом использования услуг Tcell. Каждый отзыв помогает нам становиться лучше.
            </p>

            <Button variant="hero" size="lg" onClick={scrollToForm}>
              <Send className="w-5 h-5 mr-2" />
              Оставить отзыв
            </Button>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section id="feedback-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-10 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Отправить отзыв
                </h2>
                <p className="text-muted-foreground">
                  Расскажите нам о вашем опыте использования услуг Tcell
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Ваше имя</label>
                    <Input
                      placeholder="Введите имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Номер телефона</label>
                    <Input
                      placeholder="+992 XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Оценка обслуживания</label>
                  <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                    <StarRating
                      rating={formData.rating}
                      onRatingChange={(rating) => setFormData({ ...formData, rating })}
                      interactive
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Ваш отзыв</label>
                  <textarea
                    placeholder="Расскажите о вашем опыте..."
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, consent: checked as boolean })
                    }
                    className="mt-0.5"
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
                  >
                    Разрешаю использовать мой отзыв в целях улучшения сервиса и для публикации на сайте
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Отправить отзыв
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Отзывы наших клиентов
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Узнайте, что говорят наши пользователи о качестве услуг Tcell
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {existingReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-90" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Спасибо, что помогаете делать Tcell лучше!
            </h2>

            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Ваши отзывы помогают нам развиваться и предоставлять лучший сервис для вас
            </p>

            <Button
              variant="heroOutline"
              size="lg"
              onClick={scrollToForm}
              className="border-white/30 text-primary-foreground hover:bg-white/10"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Оставить отзыв
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Feedback;
