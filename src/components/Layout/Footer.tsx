import { Link } from "react-router-dom";
import { TrendingUp, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="nav-economic">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-playfair font-bold text-white">
                  AprenderEconomía
                </h2>
                <p className="text-sm text-gold-light">.net</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Portal educativo especializado en historias y análisis sobre el desarrollo 
              de los mercados mundiales y la evolución económica global.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-sm">Calle de Alcalá, 54, 28014 Madrid, España</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-sm">+34 910 123 456</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4 text-gold" />
                <span className="text-sm">info@aprendeeconomia.net</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">Inicio</Link></li>
              <li><Link to="/articulos" className="text-gray-300 hover:text-gold transition-colors">Artículos</Link></li>
              <li><Link to="/sobre-nosotros" className="text-gray-300 hover:text-gold transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/recursos" className="text-gray-300 hover:text-gold transition-colors">Recursos Educativos</Link></li>
              <li><Link to="/contacto" className="text-gray-300 hover:text-gold transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Legal & Community */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Comunidad</h3>
            <ul className="space-y-2 mb-6">
              <li><Link to="/comunidad" className="text-gray-300 hover:text-gold transition-colors">Comunidad Privada</Link></li>
            </ul>
            
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/politica-privacidad" className="text-gray-300 hover:text-gold transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/terminos-uso" className="text-gray-300 hover:text-gold transition-colors">Términos de Uso</Link></li>
              <li><Link to="/politica-cookies" className="text-gray-300 hover:text-gold transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-light mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AprenderEconomía.net. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Portal educativo sobre economía mundial
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;