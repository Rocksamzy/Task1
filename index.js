const express = require("express");
const request = require("request");

const app = express();

app.get('/', (req, res) => {
  let name = req.query.name;
  let city = req.query.city;
  var request = require("request");
  request(
    `https://samples.openweathermap.org/data/2.5/forecast?q=${city}&appid=1b5ceba9a67f413a72aa8d1b700b92f0`,
    function (error, response, body) {
        let data = JSON.parse(body);
      if (response.statusCode === 200) {
        res.send(
          `Hello! ${name}, the weather in your city "${city}" is ${data.list[0].weather[0].description}`
        );
      }
    }
  );
});

app.listen(5000, () => 
  console.log(`Server running on port 5000`)
);
