module.exports = [
  'strapi::errors',
  // Removido o 'strapi::security' com CSP para simplificar e evitar conflitos.
  // A segurança será gerenciada pelo CORS e outras camadas.
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['https://www.climatbh.com.br', 'https://climatbh.com.br', 'http://localhost:3000'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];


