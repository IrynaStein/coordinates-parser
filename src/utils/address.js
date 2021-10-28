const request = require("postman-request");
const key = require("../apiKey");

const getCoordinatesFromAddress = (address, callback) => {
  const url =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    encodeURIComponent(address) +
    "&key=" +
    key;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to geocode server", undefined);
    } else if (response.body.results.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        lat: response.body.results[0].geometry.location.lat,
        lng: response.body.results[0].geometry.location.lng,
      });
    }
  });
};

module.exports = getCoordinatesFromAddress;
