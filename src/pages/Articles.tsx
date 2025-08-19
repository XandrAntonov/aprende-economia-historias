import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = ["all", ...new Set(articles.map(article => article.category))];
  
  const filteredArticles = selectedCategory === "all" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Artículos sobre Economía Mundial
          </h1>
          <p className="text-xl text-economic-secondary max-w-3xl mx-auto">
            Explora nuestro archivo completo de análisis económicos, historias de mercados 
            y perspectivas sobre el desarrollo económico global
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-primary text-white" 
                : "border-gold text-gold hover:bg-gold hover:text-white"
              }
            >
              {category === "all" ? "Todos los Artículos" : category}
            </Button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <Card 
              key={article.id}
              className="hover-lift cursor-pointer shadow-economic border-0 bg-white animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={`/articulos/${article.slug}`}>
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="aspect-video w-full object-cover rounded-t-lg"
                  />
                  {article.featured && (
                    <Badge className="absolute top-4 left-4 bg-gold text-white">
                      Destacado
                    </Badge>
                  )}
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-economic-muted mb-3">
                    <Badge variant="secondary" className="bg-gold/10 text-gold-dark">
                      {article.category}
                    </Badge>
                    <div className="flex items-center space-x-3 text-xs">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(article.date).toLocaleDateString('es-ES', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-playfair text-primary group-hover:text-gold transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-economic-secondary mb-4 line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-economic-muted">
                      Por {article.author}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* No Articles Message */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
              No hay artículos en esta categoría
            </h3>
            <p className="text-economic-secondary mb-6">
              Selecciona otra categoría o explora todos nuestros artículos
            </p>
            <Button onClick={() => setSelectedCategory("all")} className="bg-gold hover:bg-gold-dark">
              Ver Todos los Artículos
            </Button>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="section-premium rounded-lg p-8 text-center mt-16">
          <h2 className="text-2xl font-playfair font-bold text-primary mb-4">
            Mantente Actualizado
          </h2>
          <p className="text-economic-secondary mb-6">
            Recibe nuestros últimos análisis económicos directamente en tu bandeja de entrada
          </p>
          <Button asChild className="bg-gold hover:bg-gold-dark">
            <Link to="/comunidad">Suscríbete Ahora</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Articles;