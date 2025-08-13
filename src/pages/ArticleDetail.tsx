import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { articles } from "@/data/articles";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Navigation */}
        <Button 
          asChild 
          variant="ghost" 
          className="mb-8 text-gold hover:text-gold-dark hover:bg-gold/10"
        >
          <Link to="/articulos">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Artículos
          </Link>
        </Button>

        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <Badge className="bg-gold/10 text-gold-dark">
                {article.category}
              </Badge>
              {article.featured && (
                <Badge className="bg-primary text-white">
                  Destacado
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-economic-secondary mb-6 leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-b border-economic py-4">
              <div className="flex items-center space-x-6 text-sm text-economic-muted mb-4 md:mb-0">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.date).toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} de lectura</span>
                </div>
                <span>Por {article.author}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold hover:text-white">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir
                </Button>
                <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold hover:text-white">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Guardar
                </Button>
              </div>
            </div>
          </header>

          {/* Article Image */}
          <div className="aspect-video bg-gradient-to-br from-primary to-gold rounded-lg mb-8 shadow-elegant">
            <div className="w-full h-full bg-black/20 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl font-playfair font-bold mb-2">{article.title}</h3>
                <p className="opacity-80">{article.category}</p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:text-primary prose-p:text-economic prose-p:leading-relaxed prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-primary"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Community CTA */}
          <div className="section-premium rounded-lg p-8 text-center mt-12">
            <h2 className="text-2xl font-playfair font-bold text-primary mb-4">
              ¿Te gustó este análisis?
            </h2>
            <p className="text-economic-secondary mb-6">
              Únete a nuestra comunidad privada para acceder a contenido exclusivo y análisis más profundos
            </p>
            <Button asChild className="bg-gold hover:bg-gold-dark">
              <Link to="/comunidad">Explorar Membresía</Link>
            </Button>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-8 text-center">
              Artículos Relacionados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <div key={relatedArticle.id} className="hover-lift">
                  <Link to={`/articulos/${relatedArticle.slug}`}>
                    <div className="aspect-video bg-gradient-to-br from-primary to-gold rounded-lg mb-4"></div>
                    <h3 className="font-playfair font-bold text-primary mb-2 line-clamp-2 hover:text-gold transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-economic-secondary text-sm line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ArticleDetail;