import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Subscription Tracker API");
});

app.listen(PORT, () => {
  console.log(`Server runs on http://localhost:${PORT} `);
});

export default app;
