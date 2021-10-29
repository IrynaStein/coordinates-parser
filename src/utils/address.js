const request = require("postman-request");
const key = require("../apiKey");

const getCoordinatesFromAddress = (address, callback) => {
  const url =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    encodeURIComponent(address) +
    "&key=" +
    key;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to geocoding server", undefined);
    } else if (body.results.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      console.log("Requested address:", body.results[0].formatted_address);
      callback(undefined, {
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng,
      });
    }
  });
};

module.exports = getCoordinatesFromAddress;
