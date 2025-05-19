const aboutPage = [
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "This is about page.";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "This method is not allowed.";
    },
  },
];

module.exports = aboutPage;
