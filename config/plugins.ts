export default ({ env }: { env: (key: string) => any }) => ({
  // Configuração do plugin de upload
  upload: {
    config: {
      // Configuração para Cloudinary (descomentada se necessário)
      // provider: 'cloudinary',
      // providerOptions: {
      //   cloud_name: env('CLOUDINARY_NAME'),
      //   api_key: env('CLOUDINARY_KEY'),
      //   api_secret: env('CLOUDINARY_SECRET'),
      // },
      // actionOptions: {
      //   upload: {},
      //   delete: {},
      // },
      
      // Configuração padrão para upload local
      sizeLimit: 10 * 1024 * 1024, // 10MB
    },
  },
  
  // Configuração do plugin users-permissions
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },
});
