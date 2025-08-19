import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, TrendingUp, Users, Award } from "lucide-react";
import { articles } from "@/data/articles";
import heroImage from "@/assets/hero-economics.jpg";

const Index = () => {
  const featuredArticles = articles.filter(article => article.featured).slice(0, 3);
  const popularArticles = articles.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 animate-fade-up">
              Descubre la Historia de la 
              <span className="text-gold"> Economía Mundial</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Explora historias fascinantes sobre cómo se desarrollaron los mercados globales 
              y qué eventos transformaron nuestra economía
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button 
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-white font-semibold text-lg px-8"
              >
                <Link to="/articulos">
                  Explorar Artículos <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8"
              >
                <Link to="/comunidad">Únete a la Comunidad</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16 section-economic">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
              Artículos Destacados
            </h2>
            <p className="text-lg text-economic-secondary max-w-2xl mx-auto">
              Análisis profundos sobre los eventos más influyentes en la economía mundial
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className="hover-lift cursor-pointer shadow-economic border-0 bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/articulos/${article.slug}`}>
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="aspect-video w-full object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-economic-muted mb-2">
                      <span className="bg-gold/10 text-gold-dark px-2 py-1 rounded-md font-medium">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                    <CardTitle className="text-xl font-playfair text-primary hover:text-gold transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-economic-secondary line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="py-16 premium-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-gold-dark" />
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
              Únete a Nuestra Comunidad Privada
            </h2>
            <p className="text-lg text-economic-secondary mb-8 max-w-2xl mx-auto">
              Accede a análisis exclusivos, debates con expertos y recursos educativos 
              avanzados para profundizar tu comprensión de la economía mundial
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Contenido Exclusivo</h3>
                <p className="text-sm text-economic-secondary">Análisis profundos y casos de estudio detallados</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Análisis en Tiempo Real</h3>
                <p className="text-sm text-economic-secondary">Perspectivas sobre eventos económicos actuales</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Certificaciones</h3>
                <p className="text-sm text-economic-secondary">Acredita tu conocimiento con cursos especializados</p>
              </div>
            </div>
            <Button 
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-white font-semibold text-lg px-8"
            >
              <Link to="/comunidad">
                Ver Planes de Membresía <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Lo Más Leído
              </h2>
              <p className="text-lg text-economic-secondary">
                Los artículos favoritos de nuestra comunidad
              </p>
            </div>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
              <Link to="/articulos">Ver Todos</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className="hover-lift cursor-pointer shadow-economic border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/articulos/${article.slug}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between text-sm text-economic-muted mb-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                    <CardTitle className="text-lg font-playfair text-primary hover:text-gold transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-economic-secondary line-clamp-2 text-sm">
                      {article.excerpt}
                    </CardDescription>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;