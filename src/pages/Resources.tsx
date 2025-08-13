import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, BookOpen, BarChart3, Globe, Calendar, TrendingUp } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Línea de Tiempo: Grandes Crisis Económicas",
      description: "Infografía interactiva con las crisis más importantes del siglo XX y XXI",
      type: "Infografía",
      icon: Calendar,
      downloadUrl: "#"
    },
    {
      title: "Glosario de Términos Económicos",
      description: "Diccionario completo con más de 500 términos económicos explicados",
      type: "PDF",
      icon: BookOpen,
      downloadUrl: "#"
    },
    {
      title: "Datos Históricos de PIB Mundial",
      description: "Base de datos con información económica de 1950-2024",
      type: "Excel",
      icon: BarChart3,
      downloadUrl: "#"
    },
    {
      title: "Mapa de Bloques Comerciales",
      description: "Visualización de acuerdos comerciales y zonas económicas globales",
      type: "Infografía",
      icon: Globe,
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Recursos Educativos
          </h1>
          <p className="text-xl text-economic-secondary max-w-3xl mx-auto">
            Herramientas, infografías y materiales complementarios para profundizar tu aprendizaje
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card key={resource.title} className="shadow-economic border-0 hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                    <resource.icon className="w-5 h-5 text-gold-dark" />
                  </div>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                <CardTitle className="text-xl font-playfair text-primary">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-economic-secondary mb-4">{resource.description}</p>
                <Button className="bg-gold hover:bg-gold-dark">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center section-premium rounded-lg p-8">
          <TrendingUp className="w-16 h-16 text-gold-dark mx-auto mb-4" />
          <h2 className="text-2xl font-playfair font-bold text-primary mb-4">
            Acceso Completo con Membresía
          </h2>
          <p className="text-economic-secondary mb-6">
            Los miembros tienen acceso a más de 100 recursos adicionales y actualizaciones mensuales
          </p>
          <Button asChild className="bg-gold hover:bg-gold-dark">
            <Link to="/comunidad">Explorar Membresía</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resources;