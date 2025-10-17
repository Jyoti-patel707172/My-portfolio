import mongoose from "mongoose";
import colors from "colors"; // npm install colors

export const connectDB = async () => {
  const MONGO_URI =
    process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";

  mongoose.set("strictQuery", true); // optional, avoids warnings

  console.log("🔄 Attempting MongoDB connection...".cyan);

  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // 10s timeout
    });

    console.log(
      `✅ MongoDB Connected: ${conn.connection.host}`.green.bold +
        ` (${conn.connection.name})`.gray
    );
  } catch (error) {
    console.error(
      `❌ MongoDB Connection Failed:`.red.bold,
      error.message.yellow
    );

    // Optional: Retry logic
    setTimeout(() => {
      console.log("⏳ Retrying MongoDB connection...".blue);
      connectDB();
    }, 5000);
  }
};
