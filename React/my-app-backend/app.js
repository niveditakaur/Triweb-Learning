const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Product = require("./model/product");

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.connectionString || "";

app.get("/", (req, res) => {
  res.send("It is runnning ");
});

app.post("/product", async (req, res) => {
  try {
    const result = await Product.create(req.body);
    console.log(result);
    res.send({ status: "success", message: "Product added" });
  } catch (error) {
    console.log(error.message);
    res.send({ status: "error", message: error.message });
  }
});

app.get("/product", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send({ status: "success", data: products });
  } catch (error) {
    console.log(error.message);
    res.send({ status: "error", message: error.message });
  }
});

mongoose
  .connect(uri)
  .then(() => {
    app.listen(process.env.PORT, () => console.log("Server is running"));
  })
  .catch((error) => console.log(error));