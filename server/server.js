const express = require("express");
const app = express();
const router = express.Router();
const routeshandler = require('./routers/handler')
app.use('api',routeshandler)

app.use(express.urlencoded({ extended: false }));

const users = [{ name: "juda", age: 30 }];

app.get("/api", (req, res) => {
  res.json({ users });
});



app.listen(8080, () => {
  console.log("Server started on port 8080");
});
// app.post("/api", (req, res) => {
//   const user = req.body;
//   users.push(user)
//   console.log(req.body);
//   res.status(201).send("secssed");
// });

