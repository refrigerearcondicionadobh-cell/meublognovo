module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: {
        rejectUnauthorized: false, // importante para Render
      },
    },
    useNullAsDefault: true,
  },
});
