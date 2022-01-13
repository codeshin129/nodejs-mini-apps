const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=477fcb8bafd86d5e349d72bf3cbd82b9&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to forecast services", undefined);
    } else if (body.error) {
      callback(
        "Unable to find location forecast. Try another search.",
        undefined
      );
    } else {
      const current = body.current;
      const temperature = current.temperature;
      callback(undefined, temperature);
    }
  });
};

module.exports = forecast;
