import htmlBox from "./htmlBox.js";
import http from "http";
import fs from "fs";

let nowDate = new Date();
let week = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

let dateObject = {
  nowYear: nowDate.getFullYear(),
  nowMonth: ("0" + (nowDate.getMonth() + 1)).slice(-2),
  nowDay: ("0" + nowDate.getDate()).slice(-2),
  weekDay: week[nowDate.getDay()],
  nowHours: ("0" + nowDate.getHours()).slice(-2),
  nowMinutes: ("0" + nowDate.getMinutes()).slice(-2),
  nowSeconds: ("0" + nowDate.getSeconds()).slice(-2),
};

const server = http.createServer(function (request, response) {
  if (request.method === "GET" && request.url === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.write(htmlBox.htmlContainer(htmlBox.rootData));
    response.end();
  } else if (request.method === "GET" && request.url.startsWith("/main.js")) {
    fs.readFile("./main.js", function (err, data) {
      console.log(request.url);
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      response.write(data);
      response.end();
    });
  } else if (request.url === "/start") {
    // console.log(request.url);
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.write("ddd");
    response.end();
  }
});

server.listen(3050, function (error) {
  if (error) {
    console.error("서버 안돌아감");
  } else {
    console.log("서버 돌아감");
  }
});
