import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Contacta con Nosotros
          </h1>
          <p className="text-xl text-economic-secondary max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestro contenido o membresía? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  Envíanos un Mensaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-primary font-medium">
                        Nombre Completo *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="mt-1 border-economic focus:border-gold"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-primary font-medium">
                        Correo Electrónico *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1 border-economic focus:border-gold"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="type" className="text-primary font-medium">
                      Tipo de Consulta
                    </Label>
                    <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                      <SelectTrigger className="mt-1 border-economic focus:border-gold">
                        <SelectValue placeholder="Selecciona el tipo de consulta" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="membership">Membresía y Precios</SelectItem>
                        <SelectItem value="content">Contenido y Artículos</SelectItem>
                        <SelectItem value="technical">Soporte Técnico</SelectItem>
                        <SelectItem value="collaboration">Colaboración</SelectItem>
                        <SelectItem value="press">Prensa y Media</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-primary font-medium">
                      Asunto
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="mt-1 border-economic focus:border-gold"
                      placeholder="Breve descripción del tema"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-primary font-medium">
                      Mensaje *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="mt-1 border-economic focus:border-gold resize-none"
                      placeholder="Describe tu consulta o mensaje en detalle..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-dark text-white font-semibold py-3"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-economic border-0">
              <CardHeader>
                <CardTitle className="text-xl font-playfair text-primary">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <p className="font-medium text-primary">Dirección</p>
                    <p className="text-economic-secondary text-sm">
                      Calle de Alcalá, 54<br />
                      28014 Madrid, España
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <p className="font-medium text-primary">Teléfono</p>
                    <p className="text-economic-secondary text-sm">
                      +34 910 123 456
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <p className="text-economic-secondary text-sm">
                      info@aprendeeconomia.net
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <p className="font-medium text-primary">Horario de Atención</p>
                    <p className="text-economic-secondary text-sm">
                      Lunes a Viernes<br />
                      9:00 - 18:00 CET
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-economic border-0">
              <CardHeader>
                <CardTitle className="text-xl font-playfair text-primary">
                  Respuesta Rápida
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-economic-secondary text-sm mb-4">
                  Normalmente respondemos a todas las consultas en un plazo de 24-48 horas 
                  durante días laborables.
                </p>
                <p className="text-economic-secondary text-sm">
                  Para consultas urgentes sobre membresía, puedes llamarnos directamente 
                  durante nuestro horario de atención.
                </p>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-economic border-0">
              <CardHeader>
                <CardTitle className="text-xl font-playfair text-primary">
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-primary to-gold rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-12 h-12 mx-auto mb-2 opacity-80" />
                    <p className="text-sm opacity-90">Madrid, España</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-playfair font-bold text-primary mb-8 text-center">
            Preguntas Frecuentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="shadow-economic border-0">
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  ¿Cómo puedo acceder a la membresía?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-economic-secondary text-sm">
                  Puedes suscribirte directamente a través de nuestro formulario de contacto 
                  o llamarnos para recibir asistencia personalizada.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-economic border-0">
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  ¿Ofrecen descuentos grupales?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-economic-secondary text-sm">
                  Sí, tenemos descuentos especiales para universidades, empresas y grupos 
                  de más de 10 personas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-economic border-0">
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  ¿Puedo solicitar temas específicos?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-economic-secondary text-sm">
                  Absolutamente. Valoramos las sugerencias de nuestra comunidad y 
                  consideramos todos los temas propuestos para futuros artículos.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-economic border-0">
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  ¿Tienen programas educativos?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-economic-secondary text-sm">
                  Sí, ofrecemos programas especiales para instituciones educativas y 
                  cursos certificados para profesionales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;