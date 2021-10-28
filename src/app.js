// const path = require('path')
const getCoordinatesFromAddress = require('./utils/address')
const express = require("express");
const app = express();

app.get("", function (req, res) {
  console.log(req.query);
  const address = getAddress()
  console.log(address)
  if (!req.query.address && !req.query.coordinates) {
    return res.send("Location address or coordinates are required");
  }

  if (req.query.address) {
    console.log(req.query);
    getCoordinatesFromAddress(req.query.address, (error,)=>{

    })
    res.send("Returning address");
  } else if (req.query.coordinates) {
    res.send("Returning coordinates");
  }
});

app.get("/*", (req, res) => {
  res.send("404 Page not found");
});

app.listen(3000);
