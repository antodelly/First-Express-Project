import express from "express";
const testRouter = express.Router();

testRouter.get("/test", (req, res) => {
  res.send("This is a test route!");
});

export default testRouter;
