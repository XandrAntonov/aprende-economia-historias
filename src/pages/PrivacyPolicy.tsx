const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-playfair font-bold text-primary mb-8 text-center">
          Política de Privacidad
        </h1>
        
        <div className="prose prose-lg max-w-none text-economic">
          <p className="text-economic-secondary mb-6">
            <strong>Última actualización:</strong> 13 de agosto de 2024
          </p>

          <h2 className="text-2xl font-playfair font-bold text-primary mt-8 mb-4">1. Información que Recopilamos</h2>
          <p>Recopilamos información cuando te registras, te suscribes a nuestro boletín, respondes a una encuesta o llenas un formulario.</p>

          <h2 className="text-2xl font-playfair font-bold text-primary mt-8 mb-4">2. Uso de la Información</h2>
          <p>La información que recopilamos puede ser utilizada para personalizar tu experiencia, mejorar nuestro sitio web, procesar transacciones y enviar correos periódicos.</p>

          <h2 className="text-2xl font-playfair font-bold text-primary mt-8 mb-4">3. Protección de la Información</h2>
          <p>Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.</p>

          <h2 className="text-2xl font-playfair font-bold text-primary mt-8 mb-4">4. Cookies</h2>
          <p>Utilizamos cookies para mejorar tu experiencia, recopilar información general de visitantes y rastrear visitas a nuestro sitio web.</p>

          <h2 className="text-2xl font-playfair font-bold text-primary mt-8 mb-4">5. Consentimiento</h2>
          <p>Al usar nuestro sitio, consientes nuestra política de privacidad.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;