const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=477fcb8bafd86d5e349d72bf3cbd82b9&query=45,-75&units=m";

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
    console.log(chunk);
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log(error);
});

request.end();
