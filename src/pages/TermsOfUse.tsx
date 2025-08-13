const TermsOfUse = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-playfair font-bold text-primary mb-8 text-center">
          Términos de Uso
        </h1>
        
        <div className="prose prose-lg max-w-none text-economic">
          <p className="text-economic-secondary mb-6">
            <strong>Última actualización:</strong> 13 de agosto de 2024
          </p>

          <h2 className="text-2xl font-playfair font-bold text-primary mt-8 mb-4">1. Aceptación de Términos</h2>
          <p>Al acceder y usar este sitio web, aceptas estar sujeto a estos términos de servicio y a todas las leyes y regulaciones aplicables.</p>

          <h2 className="text-2xl font-playfair font-bold text-primary mt-8 mb-4">2. Uso del Sitio</h2>
          <p>Este sitio web es para uso educativo únicamente. No proporcionamos consejos de inversión específicos ni recomendaciones financieras.</p>

          <h2 className="text-2xl font-playfair font-bold text-primary mt-8 mb-4">3. Contenido</h2>
          <p>Todo el contenido está protegido por derechos de autor. No puedes reproducir, distribuir o modificar el contenido sin permiso expreso.</p>

          <h2 className="text-2xl font-playfair font-bold text-primary mt-8 mb-4">4. Limitación de Responsabilidad</h2>
          <p>No seremos responsables por daños derivados del uso de este sitio web o de la información contenida en él.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;