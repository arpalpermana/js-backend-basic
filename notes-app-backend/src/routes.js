const notesRoute = require("./routes/notes");

const routes = [
  ...notesRoute,
  {
    method: "*",
    path: "/{any*}",
    handler: () => {},
  },
];

module.exports = routes;
