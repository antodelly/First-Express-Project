import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.listen(process.env.PORT, () => {
  console.clear();
  console.log("=======================================");
  console.log(`SERVER STARTED ON http://localhost:${process.env.PORT}`);
  console.log("=======================================");
});

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("=======================================");
    console.log(`MongoDB connected. DB used is ${process.env.MONGO_DB_NAME}`);
    console.log("=======================================");
  })
  .catch((err) => console.error("MongoDB connection error: ", err));

// Example routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.send({ message: "API is working!" });
});

// Importing and using the test route
import testRouter from "./routes/test.js";
app.use("/apiTest", testRouter);

// Importing and using the persona router
import personaRouter from "./routes/persona.router.js";
app.use("/api/persona", personaRouter);
