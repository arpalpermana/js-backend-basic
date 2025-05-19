const http = require("http");

const requestListener = (request, response) => {
  response.setHeader = ("Content-type", "text/html");

  const { url, method } = request;

  if (url === "/") {
    if (method.toUpperCase() == "GET") {
      response.statusCode = 200;
      response.end("<h1> Homepage is receiving GET request </h1>.");
    } else if (method.toUpperCase() == "POST") {
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);

        response.statusCode = 200;
        response.end(`<h1>Hello, ${name}!</h1>`);
      });
    } else if (method.toUpperCase() == "PUT") {
      response.statusCode = 404;
      response.end("<h1> Homepage is receiving PUT request. </h1>");
    } else if (method.toUpperCase() == "DELETE") {
      response.statusCode = 404;
      response.end("<h1> Homepage is receiving DELETE request. </h1>");
    } else {
      response.statusCode = 404;
      response.end("<h1> This page didn't support this method. </h1>");
    }
  } else if (url === "/about") {
    if (method.toUpperCase() === "GET") {
      response.setHeader = ("Content-type", "application/json");
      response.setHeader = ("Powered-By", "Node.js");
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "This is about pages",
        })
      );
    } else {
      response.statusCode = 404;
      response.end(
        "<h1> About Page is not responsing any request except GET. </h1>"
      );
    }
  } else {
    response.statusCode = 400;
    response.end("<h1> Page is not found. </h1>");
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
