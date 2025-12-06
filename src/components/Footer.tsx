import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "О компании", href: "#" },
    { label: "Карьера", href: "#" },
    { label: "Новости", href: "#" },
    { label: "Партнёры", href: "#" },
  ];

  const services = [
    { label: "Для частных клиентов", href: "#" },
    { label: "Для бизнеса", href: "#" },
    { label: "Роуминг", href: "#" },
    { label: "5G", href: "#" },
  ];

  const support = [
    { label: "Центр поддержки", href: "#" },
    { label: "Связаться с нами", href: "#" },
    { label: "Частые вопросы (FAQ)", href: "#" },
    { label: "Найти магазин", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold">Tcell</span>
            </div>
            <p className="text-background/70 mb-6 max-w-sm">
              Связываем Таджикистан с миром. Мы предоставляем быстрые, надёжные и доступные мобильные услуги для всех.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/70">
                <Phone className="w-5 h-5 text-tcell-purple-light" />
                <span>+992 900 123 456</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Mail className="w-5 h-5 text-tcell-purple-light" />
                <span>support@tcell.tj</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5 text-tcell-purple-light" />
                <span>Душанбе, Таджикистан</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Компания</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-background/70 hover:text-tcell-purple-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Сервисы</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-background/70 hover:text-tcell-purple-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Поддержка</h4>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-background/70 hover:text-tcell-purple-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-xl flex items-center justify-center hover:bg-tcell-purple transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-background/70 group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-background/50 text-sm">
              © 2024 Tcell. Все права защищены.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-background/70 hover:text-tcell-purple-light transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-background/70 hover:text-tcell-purple-light transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
