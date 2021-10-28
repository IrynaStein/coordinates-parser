const getCoordinatesFromAddress = require("./utils/address");
const getAddressFromCoordinates = require("./utils/coordinates");
const express = require("express");
const app = express();

app.get("/coordinates", (req, res) => {
  if (!req.query.address) {
    return res.send("Address is required");
  }

  getCoordinatesFromAddress(req.query.address, (error, { lat, lng } = {}) => {
    if (error) {
      return res.send({ error: error });
    }
    res.send({
      lat,
      lng,
    });
  });
});

app.get("/address", (req, res) => {
  if (!req.query.latlng) {
    return res.send("Coordinates are required");
  }
  getAddressFromCoordinates(req.query.latlng, (error, { address } = {}) => {
    if (error) {
      return res.send({ error: error });
    }
    res.send({
      address,
    });
  });
});

app.get("/*", (req, res) => {
  res.send("404 Page not found");
});

app.listen(5000);
