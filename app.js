import htmlBox from "./htmlBox.js";
import http from "http";

const server = http.createServer(function(request, response) {
  if (request.method === "GET" && request.url === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.write(htmlBox.htmlContainer(htmlBox.testData));
    response.end();
  }
})

server.listen(3050, function (error) {
  if (error) {
    console.error("서버 안돌아감");
  } else {
    console.log("서버 돌아감");
  }
});