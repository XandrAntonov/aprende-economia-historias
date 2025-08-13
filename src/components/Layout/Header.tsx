import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, TrendingUp } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Inicio", href: "/" },
    { name: "Artículos", href: "/articulos" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    { name: "Recursos Educativos", href: "/recursos" },
    { name: "Contacto", href: "/contacto" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    return location.pathname.startsWith(href) && href !== "/";
  };

  return (
    <header className="nav-economic shadow-elegant sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-playfair font-bold text-white">
                ArendeEconomía
              </h1>
              <p className="text-xs text-gold-light">.net</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-gold"
                    : "text-white hover:text-gold-light"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-gold hover:bg-gold-dark text-white font-semibold shadow-gold"
            >
              <Link to="/comunidad">Únete a la Comunidad</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-light">
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium py-2 transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-gold"
                      : "text-white hover:text-gold-light"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-gold hover:bg-gold-dark text-white font-semibold mt-4 w-fit"
              >
                <Link to="/comunidad" onClick={() => setIsMenuOpen(false)}>
                  Únete a la Comunidad
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;