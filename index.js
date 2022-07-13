import express from "express";
import config from "./config";
import productRouter from "./routes/product_route";
import mongoose from "mongoose";

// Koneksi Database
mongoose.connect(config.databaseURL);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log("Mongoose Connection Error", error);
});

database.on("connected", () => {
  console.log("Database Connected");
});

// Menjalankan Server
const app = express();

// API Produk
app.use(express.json());
app.use("/api", productRouter);

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});

export default app;
