const aboutPage = require("./aboutPage");
const homePage = require("./homePage");

const routes = [
  ...homePage,
  ...aboutPage,
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "There is no page.";
    },
  },
];

module.exports = routes;
