import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message: "hello world",
  });
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
