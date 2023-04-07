import htmlBox from "./htmlBox.js";
import http from "http";
import fs from "fs";

const server = http.createServer(function(request, response) {
  if (request.method === "GET" && request.url === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.write(htmlBox.htmlContainer(htmlBox.rootData));
    response.end();
    console.log(request.url);
  }
  else if (request.url === "/style.js") {
    fs.readFile("./style.js", function (err, data) {
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      response.write(data);
      response.end();
    });
  }
})

server.listen(3050, function (error) {
  if (error) {
    console.error("서버 안돌아감");
  } else {
    console.log("서버 돌아감");
  }
});