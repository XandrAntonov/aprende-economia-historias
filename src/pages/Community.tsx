import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check, Star, Users, BookOpen, TrendingUp, Award, MessageCircle, Calendar } from "lucide-react";

const Community = () => {
  const plans = [
    {
      name: "Explorador",
      price: "19",
      period: "mes",
      description: "Perfecto para empezar a profundizar en economía mundial",
      features: [
        "Acceso a artículos exclusivos semanales",
        "Biblioteca de recursos educativos",
        "Newsletter semanal con análisis",
        "Foro de discusión comunitario",
        "Descargas de infografías económicas"
      ],
      highlighted: false
    },
    {
      name: "Analista",
      price: "39",
      period: "mes",
      description: "Para quienes buscan análisis más profundos y herramientas avanzadas",
      features: [
        "Todo lo incluido en Explorador",
        "Webinars mensuales en vivo",
        "Casos de estudio detallados",
        "Acceso a archivo histórico completo",
        "Sesiones Q&A con expertos",
        "Certificados de finalización de cursos",
        "Acceso prioritario a contenido nuevo"
      ],
      highlighted: true
    },
    {
      name: "Economista Pro",
      price: "79",
      period: "mes",
      description: "El nivel más avanzado para profesionales y entusiastas serios",
      features: [
        "Todo lo incluido en Analista",
        "Consultas directas con el equipo",
        "Análisis personalizados bajo demanda",
        "Acceso a base de datos económicos",
        "Networking con otros profesionales",
        "Masterclasses trimestrales exclusivas",
        "Certificación profesional anual",
        "Contenido premium anticipado"
      ],
      highlighted: false
    }
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Contenido Exclusivo",
      description: "Artículos, análisis y casos de estudio que no encontrarás en ningún otro lugar"
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Conecta con otros apasionados de la economía y profesionales del sector"
    },
    {
      icon: TrendingUp,
      title: "Análisis en Tiempo Real",
      description: "Perspectivas inmediatas sobre eventos económicos actuales y su contexto histórico"
    },
    {
      icon: Award,
      title: "Certificaciones",
      description: "Valida tu conocimiento con certificados reconocidos en el sector educativo"
    },
    {
      icon: MessageCircle,
      title: "Acceso Directo a Expertos",
      description: "Sesiones Q&A y consultas con nuestro equipo de economistas e historiadores"
    },
    {
      icon: Calendar,
      title: "Eventos Exclusivos",
      description: "Webinars, masterclasses y eventos especiales solo para miembros"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Comunidad Privada de 
            <span className="text-gold"> AprenderEconomía</span>
          </h1>
          <p className="text-xl text-economic-secondary max-w-3xl mx-auto leading-relaxed mb-8">
            Únete a una comunidad exclusiva de profesionales, estudiantes y entusiastas 
            comprometidos con el aprendizaje profundo de la economía mundial
          </p>
          <div className="flex items-center justify-center space-x-6 text-economic-muted">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>500+ miembros activos</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-gold" />
              <span>4.9/5 valoración</span>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className="shadow-economic border-0 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <CardTitle className="text-xl font-playfair text-primary">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-economic-secondary">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
              Planes de Membresía
            </h2>
            <p className="text-lg text-economic-secondary max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tu nivel de interés y compromiso 
              con el aprendizaje económico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative shadow-elegant border-0 hover-lift ${
                  plan.highlighted ? 'ring-2 ring-gold' : ''
                }`}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold text-white">
                    Más Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-playfair text-primary mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">€{plan.price}</span>
                    <span className="text-economic-muted">/{plan.period}</span>
                  </div>
                  <CardDescription className="text-economic-secondary">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-economic text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild
                    className={`w-full ${
                      plan.highlighted 
                        ? 'bg-gold hover:bg-gold-dark' 
                        : 'bg-primary hover:bg-primary-light'
                    }`}
                  >
                    <Link to="/contacto">
                      Comenzar Ahora
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="section-economic rounded-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
              Lo Que Dicen Nuestros Miembros
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-economic bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-economic-secondary mb-4 italic">
                  "Los análisis de AprenderEconomía me han ayudado tremendamente a entender 
                  el contexto histórico de los mercados actuales. Es contenido de calidad 
                  universitaria pero accesible."
                </p>
                <div className="text-sm text-economic-muted">
                  <strong>María González</strong> - Consultora Financiera
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-economic bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-economic-secondary mb-4 italic">
                  "La comunidad es extraordinaria. Las discusiones son profundas y 
                  siempre aprendo algo nuevo de otros miembros y expertos."
                </p>
                <div className="text-sm text-economic-muted">
                  <strong>Carlos Ruiz</strong> - Profesor de Economía
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-playfair font-bold text-primary mb-8 text-center">
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-6">
            <Card className="border-0 shadow-economic">
              <CardHeader>
                <CardTitle className="text-primary">¿Puedo cancelar mi membresía en cualquier momento?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-economic-secondary">
                  Sí, puedes cancelar tu membresía en cualquier momento. No hay compromisos 
                  a largo plazo y mantendrás acceso hasta el final de tu período de facturación actual.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-economic">
              <CardHeader>
                <CardTitle className="text-primary">¿Ofrecen descuentos para estudiantes?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-economic-secondary">
                  Sí, ofrecemos un 30% de descuento para estudiantes universitarios con 
                  identificación válida. Contáctanos para más información.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-economic">
              <CardHeader>
                <CardTitle className="text-primary">¿El contenido está en español?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-economic-secondary">
                  Todo nuestro contenido está en español, creado específicamente para 
                  la audiencia hispanohablante con ejemplos y contexto relevantes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-primary to-gold rounded-lg p-8 text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Comienza Tu Viaje de Aprendizaje Hoy
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Únete a cientos de profesionales que ya están ampliando su comprensión 
            de la economía mundial
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-semibold"
          >
            <Link to="/contacto">
              Comenzar Membresía
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Community;