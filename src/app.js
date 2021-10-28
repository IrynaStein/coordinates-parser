// const path = require('path')
const getCoordinatesFromAddress = require("./utils/address");
const getAddressFromCoordinates = require('./utils/coordinates')
const express = require("express");
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
    if(!req.query.latlng){
        return res.send("Coordinates are required")
    }


})

app.get("/*", (req, res) => {
  res.send("404 Page not found");
});

app.listen(5000);
