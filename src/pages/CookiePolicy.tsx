const CookiePolicy = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-playfair font-bold text-primary mb-8 text-center">
          Política de Cookies
        </h1>
        
        <div className="prose prose-lg max-w-none text-economic">
          <p className="text-economic-secondary mb-6">
            <strong>Última actualización:</strong> 13 de agosto de 2024
          </p>

          <h2 className="text-2xl font-playfair font-bold text-primary mt-8 mb-4">¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web.</p>

          <h2 className="text-2xl font-playfair font-bold text-primary mt-8 mb-4">Tipos de cookies que utilizamos</h2>
          <ul>
            <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio</li>
            <li><strong>Cookies de análisis:</strong> Para entender cómo los usuarios interactúan con nuestro sitio</li>
            <li><strong>Cookies de funcionalidad:</strong> Para recordar tus preferencias</li>
          </ul>

          <h2 className="text-2xl font-playfair font-bold text-primary mt-8 mb-4">Control de cookies</h2>
          <p>Puedes controlar las cookies a través de la configuración de tu navegador. Sin embargo, deshabilitar ciertas cookies puede afectar la funcionalidad del sitio.</p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;