import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/health", (req, res) => {
  res.send("ok");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  console.log("PORT from env:", process.env.PORT);
});
