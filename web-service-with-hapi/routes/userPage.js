const userPage = [
  {
    method: "GET",
    path: "/users/{name?}",
    handler: (request, h) => {
      const { location = "id" } = request.query;
      const usersCreated = ["arfal", "johndoe", "rahmatlorem"];
      const filteredName = usersCreated.find((user) => {
        return user === request.params.name;
      });
      return filteredName
        ? `This page is belong to ${filteredName} in ${location}`
        : `No user with name ${request.params.name}`;
    },
  },
  {
    method: "POST",
    path: "/users/{name?}",
    handler: (request, h) => {
      const { age, gender } = request.payload;
      const { name = "Guest" } = request.params;
      const response = h
        .response(`${name} is ${age} years old and a ${gender}`)
        .type("text/plain")
        .header("Custom-Header", `Text`);
      return response;
    },
  },
  {
    method: "*",
    path: "/users/{any*}",
    handler: (request, h) => {
      return `This method is not allowed.`;
    },
  },
];

module.exports = userPage;
