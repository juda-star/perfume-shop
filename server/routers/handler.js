const express = require("express");
const router = express.Router();

router.get("/MyList", (req, res) => {
  const myList = [
    {
      Name: "joop",
      Img: "https://d3m9l0v76dty0.cloudfront.net/system/photos/7786367/original/4510af3ee2d07694f0aa313d53646fab.jpg",
      Price: "300$",
    },
  ];
  res.end(JSON.stringify(myList));
});

router.post("/addList", (req, res) => {
  res.end("NA");
});
module.exports = router;
