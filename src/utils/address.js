const request = require("postman-request");
const key = require("../apiKey");

const getCoordinatesFromAddress = (address, callback) => {
  const url =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    encodeURIComponent(address) +
    "&key=" +
    key;
  console.log("hello");

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to the geocode server", undefined);
      console.log("Unable to connect to the geocode server");
    } else if (response.body.results.length === 0) {
      console.log("Unable to find location. Try another search");
      callback("Unable to find location. Try another search", undefined);
    } else {
      console.log(response.body.results[0].geometry.location.lat);
      callback(undefined, {
        address: response.body.results[0].formatted_address,
        lattitude: response.body.results[0].geometry.location.lat,
        longitude: response.body.results[0].geometry.location.lng,
      });
    }
  });
};

module.exports = getCoordinatesFromAddress;
