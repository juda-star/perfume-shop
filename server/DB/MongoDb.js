const mongoose = require("mongoose");
const connectDatabase = async () => {
  try {
    const connection = mongoose.connect(
      "mongodb+srv://perfume123:123123@cluster0.nslk7zv.mongodb.net/?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log("mongo connected");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    // process.exit(1)
  }
};
module.exports = connectDatabase;
// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };

//   const dbConnection_test = "mongodb://localhost:8080/perfume123";
//   mongoose
//     .connect(dbConnection_test, options)
//     .then(() => {
//       console.log("mongoDB connected");
//     })
//     .catch((err) => {
//       console.log("Connection error", err.message);
//     });
