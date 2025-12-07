import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import imageLogo from "../../public/LogoTcell.png";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let navigate = useNavigate();
  const navItems = [
    { label: "Тарифы", href: "#tariffs" },
    { label: "Сервисы", href: "#features" },
    { label: "Мониторинг", href: "#calculator" },
    { label: "Поддержка", href: "#reviews" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img className="w-[100px]" src={imageLogo} alt="" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              to="/feedback"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-semibold"
            >
              Ваше мнение
            </Link>

            <Link
              to="/expenses"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-semibold"
            >
              Контроль расходов
            </Link>
            <Link
                to="/dashboard"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-semibold"
              >
                Отзывы и аналитика
              </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => navigate("/tarifFind")}
              variant="hero"
              size="default"
            >
              Найти лучший тариф
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-up">
            <nav className="flex flex-col gap-4">
              <Link
                to="/feedback"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-semibold"
              >
                Ваше мнение
              </Link>

              <Link
                to="/expenses"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-semibold"
              >
                Контроль расходов
              </Link>
              <Link
                to="/dashboard"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-semibold"
              >
                Отзывы и аналитика
              </Link>
              <Button variant="hero" size="default" className="mt-2">
                Найти лучший тариф
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
