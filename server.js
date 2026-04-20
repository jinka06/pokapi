import express from "express";
import { apiRouter } from "./routes/apiRoutes.js";

const PORT = 8000;

const app = express();

app.use("/api", apiRouter);
app.use((req, res) => {
  res.status(404).json({
    error: "Welcome to the Pokémon API! Use /api to access the endpoints.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
