import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen py-12 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        
        <h1 className="text-4xl font-playfair font-bold text-primary mb-4">
          ¡Gracias por Contactarnos!
        </h1>
        
        <p className="text-xl text-economic-secondary mb-8">
          Hemos recibido tu mensaje correctamente. Nuestro equipo te responderá 
          en un plazo de 24-48 horas durante días laborables.
        </p>
        
        <div className="space-y-4">
          <p className="text-economic-muted">
            Mientras tanto, puedes explorar nuestros artículos más populares 
            o conocer más sobre nuestra comunidad privada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild className="bg-gold hover:bg-gold-dark">
              <Link to="/articulos">
                Ver Artículos <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
              <Link to="/">Ir al Inicio</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;