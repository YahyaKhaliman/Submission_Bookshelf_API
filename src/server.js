const Hapi = require('@hapi/hapi');
const paths = require('./paths');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(paths);

  await server.start();
  console.log('Server berjalan di', server.info.uri);
};

init();
