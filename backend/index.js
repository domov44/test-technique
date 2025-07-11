const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: 'localhost',
    routes: { cors: { origin: ['*'] } }
  });

  server.route({
    method: 'GET',
    path: '/api/hello',
    handler: () => ({ message: 'Hello from backend' })
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();
