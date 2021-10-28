const request = require("postman-request");
const key = require("../apiKey");

const getAddressFromCoordinates = (lat, lng, callback) => {
  const url =
    "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
    lat +
    lng +
    "&key=" +
    key;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to geocode service");
    } else if (response.body.results.length === 0) {
      callback("Unable to find location. Try another search");
    } else {
      callback({
        address: response.body.results[0].formatted_address,
      });
    }
  });
};

module.exports = getAddressFromCoordinates;
