import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./app/routes";

const app: Application = express();

// CORS Configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "https://devsafix.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
  })
);

// Parsers
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Application Routes ---
app.use("/api/v1", router);

// Health Check Route
app.get("/", (req: Request, res: Response) => {
  res.send("Portfolio server is running ...");
});

// --- Error Handling ---

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Something went wrong!",
    error: err,
  });
});

// Handle Not Found Routes
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "API Not Found!",
    error: {
      path: req.originalUrl,
      message: "The requested path does not exist.",
    },
  });
});

export default app;
