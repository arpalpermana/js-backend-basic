const HAPI = require("@hapi/hapi");
const serverRoutes = require("./routes");

const init = async () => {
  const server = HAPI.server({
    port: 8000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(serverRoutes);

  await server.start();
  console.log(`Server is running at ${server.info.uri}`);
};

init();
