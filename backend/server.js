const express = require("express");
const cors = require("cors"); // Thêm dòng này
const app = express();
require("dotenv").config();

const connectDB = require("./configs/db");
const authRoutes = require("./routes/userRoute");

const PORT = process.env.PORT || 8001;

// Sử dụng CORS
app.use(cors()); // Thêm dòng này
app.use(express.json());

// Kết nối đến MongoDB
connectDB();

// API routes
app.use("/api/user", authRoutes);

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
