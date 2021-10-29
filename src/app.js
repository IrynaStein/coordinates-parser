const getCoordinatesFromAddress = require("./utils/address");
const getAddressFromCoordinates = require("./utils/coordinates");
const express = require("express");
const app = express();
const port = 5000

app.get("/coordinates", (req, res) => {
  if (!req.query.address) {
    return res.send("Address is required");
  }

  getCoordinatesFromAddress(req.query.address, (error, { lat, lng } = {}) => {
    if (error) {
      return res.send({ error: error });
    }
    res.status(200).send({
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
    res.status(200).send({
      address,
    });
  });
});

app.get("/*", (req, res) => {
  res.send("404 Page not found");
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});
