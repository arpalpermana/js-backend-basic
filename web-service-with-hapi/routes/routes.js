const aboutPage = require("./aboutPage");
const homePage = require("./homePage");
const userPage = require("./userPage");

const routes = [
  ...homePage,
  ...aboutPage,
  ...userPage,
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "There is no page.";
    },
  },
];

module.exports = routes;
