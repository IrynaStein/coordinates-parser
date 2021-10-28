// const path = require('path')
const getCoordinatesFromAddress = require("./utils/address");
const express = require("express");
const { URITooLong } = require("http-errors");
const app = express();

// app.get("", function (req, res) {
//   console.log(req.query);
//   //   const address = getCoordinatesFromAddress()
//   if (!req.query.address && !req.query.coordinates) {
//     return res.send("Location address or coordinates are required");
//   }

//   if (req.query.address) {
//     console.log(req.query);
//     getCoordinatesFromAddress(
//       req.query.address,
//       (error, { lat, long } = {}) => {
//         if (error) {
//           return res.send({ error: error });
//         }
//         res.send({
//             // address,
//             lat,
//             long});
//         console.log(lat, long)
//       }
//     );
//     // res.send("Returning address");
//   } else if (req.query.coordinates) {
//     res.send("Returning coordinates");
//   }
// });

app.get("/coordinates", (req, res) => {
  if (!req.query.address) {
    return res.send("Address is required");
  }

  getCoordinatesFromAddress(req.query.address, (error, { lat, long } = {}) => {
    if (error) {
      return res.send({ error: error });
    }
    res.send({
      lat,
      long,
    });
  });
});

app.get("/*", (req, res) => {
  res.send("404 Page not found");
});

app.listen(5000);
