const homePage = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Welcome to home page";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "This method is not allowed.";
    },
  },
];

module.exports = homePage;
