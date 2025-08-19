import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Users, HeadphonesIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("¡Mensaje enviado correctamente! Te responderemos pronto.");
    navigate("/gracias");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-primary to-primary-dark py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 animate-fade-up">
              Contacta con Nosotros
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              ¿Tienes preguntas sobre nuestro contenido o membresía? 
              <br className="hidden md:block" />
              Estamos aquí para ayudarte en tu camino hacia el conocimiento económico
            </p>
            
            {/* Quick Contact Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <p className="text-sm opacity-80">Respuesta en 24h</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <p className="text-sm opacity-80">+10,000 usuarios</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                  <HeadphonesIcon className="w-8 h-8" />
                </div>
                <p className="text-sm opacity-80">Soporte dedicado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          
          {/* Contact Methods Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-gold hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-gold-light rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Llámanos</h3>
                <p className="text-economic-secondary text-sm mb-3">Lunes a Viernes<br />9:00 - 18:00 CET</p>
                <p className="text-gold font-medium">+34 910 123 456</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-gold hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-gold-light rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Escríbenos</h3>
                <p className="text-economic-secondary text-sm mb-3">Respuesta en<br />24-48 horas</p>
                <p className="text-gold font-medium text-sm">info@aprendeeconomia.net</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-gold hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-gold-light rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Visítanos</h3>
                <p className="text-economic-secondary text-sm mb-3">Calle de Alcalá, 54<br />28014 Madrid</p>
                <p className="text-gold font-medium text-sm">España</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-gold hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-gold-light rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Chat Online</h3>
                <p className="text-economic-secondary text-sm mb-3">Asistencia<br />inmediata</p>
                <p className="text-gold font-medium text-sm">Próximamente</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-elegant">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-gold-light rounded-full p-2">
                      <Send className="w-5 h-5 text-gold" />
                    </div>
                    <CardTitle className="text-2xl font-playfair text-primary">
                      Envíanos un Mensaje
                    </CardTitle>
                  </div>
                  <p className="text-economic-secondary">
                    Completa el formulario y nos pondremos en contacto contigo lo antes posible
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-primary font-medium flex items-center gap-2">
                          Nombre Completo *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="h-12 border-2 border-primary/20 focus:border-gold transition-colors"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-primary font-medium">
                          Correo Electrónico *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="h-12 border-2 border-primary/20 focus:border-gold transition-colors"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type" className="text-primary font-medium">
                        Tipo de Consulta
                      </Label>
                      <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                        <SelectTrigger className="h-12 border-2 border-primary/20 focus:border-gold">
                          <SelectValue placeholder="Selecciona el tipo de consulta" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="membership">💎 Membresía y Precios</SelectItem>
                          <SelectItem value="content">📚 Contenido y Artículos</SelectItem>
                          <SelectItem value="technical">🔧 Soporte Técnico</SelectItem>
                          <SelectItem value="collaboration">🤝 Colaboración</SelectItem>
                          <SelectItem value="press">📰 Prensa y Media</SelectItem>
                          <SelectItem value="other">❓ Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-primary font-medium">
                        Asunto
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="h-12 border-2 border-primary/20 focus:border-gold transition-colors"
                        placeholder="Breve descripción del tema"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-primary font-medium">
                        Mensaje *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="border-2 border-primary/20 focus:border-gold resize-none transition-colors"
                        placeholder="Describe tu consulta o mensaje en detalle..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-14 bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white font-semibold text-lg shadow-gold hover:shadow-elegant transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Office Hours */}
              <Card className="bg-gradient-to-br from-primary to-primary-dark text-white border-0 shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-gold" />
                    <h3 className="text-xl font-playfair font-semibold">Horario de Atención</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="opacity-90">Lunes - Viernes</span>
                      <span className="font-medium text-gold">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="opacity-90">Sábados</span>
                      <span className="font-medium">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="opacity-90">Domingos</span>
                      <span className="font-medium">Cerrado</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm opacity-80">
                      Horario Central Europeo (CET)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-economic">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gold-light rounded-full p-2">
                      <MessageCircle className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-primary">Tiempo de Respuesta</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-economic-secondary">Email</span>
                      <span className="font-medium text-primary">24-48h</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-economic-secondary">Teléfono</span>
                      <span className="font-medium text-primary">Inmediato</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-economic-secondary">Consultas urgentes</span>
                      <span className="font-medium text-gold">Prioritarias</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Map */}
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-economic">
                <CardHeader>
                  <CardTitle className="text-xl font-playfair text-primary flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gold" />
                    Nuestra Ubicación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-primary via-primary-dark to-gold rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-gold/80 group-hover:from-primary/60 group-hover:to-gold/60 transition-all duration-300" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMjAgMjBjMC01LjUtNC41LTEwLTEwLTEwcy0xMCA0LjUtMTAgMTAgNC41IDEwIDEwIDEwIDEwLTQuNSAxMC0xMHptMTAgMGMwLTUuNS00LjUtMTAtMTAtMTBzLTEwIDQuNS0xMCAxMCA0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
                    <div className="text-center text-white relative z-10">
                      <MapPin className="w-16 h-16 mx-auto mb-3 opacity-90 group-hover:scale-110 transition-transform duration-300" />
                      <p className="font-medium text-lg">Madrid, España</p>
                      <p className="text-sm opacity-90 mt-1">Calle de Alcalá, 54</p>
                      <div className="mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                        Ver en mapa
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-xl text-economic-secondary max-w-2xl mx-auto">
                Encuentra respuestas rápidas a las preguntas más comunes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-economic hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-3">
                    <div className="bg-gold-light rounded-full p-2 shrink-0">
                      <Users className="w-4 h-4 text-gold" />
                    </div>
                    ¿Cómo puedo acceder a la membresía?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-economic-secondary">
                    Puedes suscribirte directamente a través de nuestro formulario de contacto 
                    o llamarnos para recibir asistencia personalizada con tu suscripción.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-economic hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-3">
                    <div className="bg-gold-light rounded-full p-2 shrink-0">
                      <Users className="w-4 h-4 text-gold" />
                    </div>
                    ¿Ofrecen descuentos grupales?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-economic-secondary">
                    Sí, tenemos descuentos especiales para universidades, empresas y grupos 
                    de más de 10 personas. Contacta con nosotros para más detalles.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-economic hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-3">
                    <div className="bg-gold-light rounded-full p-2 shrink-0">
                      <MessageCircle className="w-4 h-4 text-gold" />
                    </div>
                    ¿Puedo solicitar temas específicos?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-economic-secondary">
                    Absolutamente. Valoramos las sugerencias de nuestra comunidad y 
                    consideramos todos los temas propuestos para futuros artículos.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-economic hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-3">
                    <div className="bg-gold-light rounded-full p-2 shrink-0">
                      <HeadphonesIcon className="w-4 h-4 text-gold" />
                    </div>
                    ¿Tienen programas educativos?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-economic-secondary">
                    Sí, ofrecemos programas especiales para instituciones educativas y 
                    cursos certificados para profesionales del sector económico.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;