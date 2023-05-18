const express = require("express");
const mongoose = require("mongoose");
const router=require("./Router/Router")
require("dotenv").config()
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use(express.json());

app.use("/", router);

// Connect to MongoDB
mongoose 
  .connect(
    "mongodb+srv://Rsangram890:hPZbgpmJvegZil8Q@cluster0.osqcdhn.mongodb.net/EMAILOTP?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
app.get("/test", (req, res) => {
    res.send ("Deployment sussfully")
})
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
