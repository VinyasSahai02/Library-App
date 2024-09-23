const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    // "mongodb+srv://abhishekpaul:admin@cluster0.pgb28wc.mongodb.net/?retryWrites=true&w=majority"
    "mongodb+srv://admin:AYxzO3DsTFSsbO8l@cluster0.o2hwa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));



  // AYxzO3DsTFSsbO8l