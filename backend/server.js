import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import contactRoutes from "./routes/contactRoutes.js";
import { connectDB } from "./config/database.js";


// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 🧩 Middleware
app.use(cors({
  origin: "https://my-portfolio-frontend1.onrender.com"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🧠 Connect to MongoDB
connectDB();

// 🛣️ API Routes
app.use("/api/contact", contactRoutes);

// 🌐 Basic route
app.get("/", (req, res) => {
  res.json({ message: "🚀 Jyoti Portfolio Backend API is running successfully" });
});

// 🧰 Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ⚙️ Global Error Handler
app.use((err, req, res, next) => {
  console.error(`❌ Error: ${err.message}`.red);
  res.status(500).json({ message: "Internal Server Error" });
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`.green.bold);
});
