require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConnect");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const creditRoutes = require("./routes/creditRoutes");
const userRoutes = require("./routes/userRoutes");
// const helperRoutes = require("./routes/helperRoutes");
// const documentRoutes = require("./routes/documentRoutes");

// Middleware
const authMiddleware = require("./middlewares/authMiddleware");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Public Routes (No Authentication Required)
app.use("/api/auth", authRoutes);

// Private Routes (Authentication Required)
app.use("/api/credit", authMiddleware, creditRoutes);
app.use("/api/user", authMiddleware, userRoutes);
// app.use("/api/helpers", authMiddleware, helperRoutes);
// app.use("/api/documents", authMiddleware, documentRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
