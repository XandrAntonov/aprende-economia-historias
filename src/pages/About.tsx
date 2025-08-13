import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Users, TrendingUp, Globe, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Sobre AprenderEconomía
          </h1>
          <p className="text-xl text-economic-secondary max-w-3xl mx-auto leading-relaxed">
            Somos un portal educativo especializado en hacer accesible la historia y el análisis 
            de la economía mundial para el público hispanohablante
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-economic border-0 hover-lift">
            <CardHeader>
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-gold-dark" />
              </div>
              <CardTitle className="text-2xl font-playfair text-primary">
                Nuestra Misión
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-economic-secondary leading-relaxed">
                Democratizar el conocimiento económico a través de contenido educativo de calidad 
                que explica los eventos históricos y tendencias que han moldeado los mercados mundiales, 
                sin caer en recomendaciones de inversión específicas.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-economic border-0 hover-lift">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-playfair text-primary">
                Nuestra Visión
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-economic-secondary leading-relaxed">
                Convertirnos en la referencia principal en español para el aprendizaje de economía 
                mundial, fomentando una comprensión más profunda de cómo los mercados globales 
                afectan la vida cotidiana de las personas.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Approach */}
        <div className="section-economic rounded-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
              Nuestro Enfoque Educativo
            </h2>
            <p className="text-lg text-economic-secondary max-w-2xl mx-auto">
              Creemos en el poder de las historias para hacer comprensible la economía compleja
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gold-dark" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Narrativa Histórica
              </h3>
              <p className="text-economic-secondary">
                Convertimos eventos económicos complejos en historias comprensibles 
                que revelan las causas y consecuencias de las transformaciones de mercado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Análisis Riguroso
              </h3>
              <p className="text-economic-secondary">
                Basamos nuestro contenido en fuentes académicas y datos verificables, 
                presentados de manera accesible sin sacrificar la profundidad del análisis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-gold-dark" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Perspectiva Global
              </h3>
              <p className="text-economic-secondary">
                Exploramos cómo los eventos económicos se conectan globalmente, 
                con especial atención al impacto en mercados hispanohablantes.
              </p>
            </div>
          </div>
        </div>

        {/* What We Don't Do */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-playfair font-bold text-red-800 mb-4 text-center">
            Compromiso de Transparencia
          </h2>
          <div className="text-center">
            <p className="text-red-700 mb-4 font-medium">
              En AprenderEconomía NO ofrecemos:
            </p>
            <ul className="text-red-600 space-y-2 max-w-2xl mx-auto">
              <li>• Consejos directos de inversión</li>
              <li>• Recomendaciones sobre instrumentos financieros específicos (acciones, bonos, forex)</li>
              <li>• Predicciones de mercado o análisis técnico</li>
              <li>• Servicios de gestión de patrimonio</li>
            </ul>
            <p className="text-red-700 mt-4 italic">
              Nuestro enfoque es puramente educativo e histórico, diseñado para aumentar 
              la comprensión general de los mercados mundiales.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-playfair font-bold text-primary mb-6">
            Nuestro Equipo
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-economic-secondary mb-8">
              Somos un equipo multidisciplinario de economistas, historiadores y comunicadores 
              apasionados por hacer accesible el conocimiento económico.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-economic border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-gold rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-primary mb-2">Investigación Económica</h3>
                  <p className="text-sm text-economic-secondary">
                    Especialistas en análisis de mercados históricos y tendencias globales
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-economic border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold to-primary rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-primary mb-2">Comunicación Educativa</h3>
                  <p className="text-sm text-economic-secondary">
                    Expertos en transformar análisis complejos en contenido comprensible
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-economic border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-gold rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-primary mb-2">Historia Económica</h3>
                  <p className="text-sm text-economic-secondary">
                    Historiadores especializados en evolución de mercados mundiales
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center section-premium rounded-lg p-8">
          <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-gold-dark" />
          </div>
          <h2 className="text-2xl font-playfair font-bold text-primary mb-4">
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-economic-secondary mb-6 max-w-2xl mx-auto">
            Forma parte de una comunidad comprometida con el aprendizaje continuo 
            sobre economía mundial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gold hover:bg-gold-dark">
              <Link to="/comunidad">Explorar Membresía</Link>
            </Button>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
              <Link to="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;