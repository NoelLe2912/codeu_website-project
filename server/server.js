import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();
// const allowedOrigins = ["http://localhost:5173"];
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
// app.use(cors({ origin: allowedOrigins, credentials: true }));

const allowedOrigins = [
  process.env.CLIENT_URL ?? "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "https://codeu.onrender.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // origin is undefined for same-origin tools like curl/postman
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//API Endpoints
app.get("/", (req, res) => res.send("API working Fine"));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
