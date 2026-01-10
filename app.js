import express from "express";

import { PORT } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Subscription Tracker API");
});

app.listen(PORT, () => {
  console.log(`Server runs on http://localhost:${PORT} `);
});

export default app;
