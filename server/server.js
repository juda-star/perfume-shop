const express = require("express");
const app = express();
const cors = require("cors");
const User = require("../server/models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const router = express.Router();
// const routeshandler = require('./routers/handler')
// app.use('api',routeshandler)

// const connection =
//   "mongodb+srv://perfume123:perfume123@cluster0.gzhq7mu.mongodb.net/?retryWrites=true&w=majority";

// async function connect() {
//   try {
//     await mongoose.connect(connection);
//     console.log("connected to mongo");
//   } catch (error) {
//     console.error(error);
//   }
// }

// connect();

// app.post("/api/register", async (req, res) => {
//   try {
//     console.log(req.body);
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(req.body.password, salt);
//     const user = await User.create({
//       name: req.body.name,
//       email: req.body.email,
//       password: hash,
//     });
//     console.log(user);
//     res.json({ status: "ok" });
//   } catch (error) {
//     res.json({ status: "error", error: "please write again" });
//   }
// });

// app.post("/api/register", async (req, res) => {
//   console.log(req.body);
//   res.json({ status: "ok" });
// });

// app.post("/api/login", async (req, res) => {
//   try {
//     const user = await User.findOne({
//       email: req.body.email,
//     });
//     console.log("baba");
//     if (!user) {
//       return next(404, "Wrong Password or Email");
//     }
//     if (user) {
//       const isPasswordCorrect = await bcrypt.compare(
//         req.body.password
//         // user.password
//       );
//       if (!isPasswordCorrect) return 400, "User not found";
//       const { password, ...otherDetails } = user._doc;
//       res.status(200).json(`user now log in${{ ...otherDetails }}`);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
