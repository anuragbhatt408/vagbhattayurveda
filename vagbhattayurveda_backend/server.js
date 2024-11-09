import express from "express";
import dotenv from "dotenv";
import DefaultRouter from "./routes/defaultRoute.js";
import UserRouter from "./routes/userRoutes.js";
import ConnectDB from "./db/db.js";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT;

const corsOptions = {
  origin: "http://localhost:5173", // to allow requests from client
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

ConnectDB();

app.use("/", DefaultRouter);

app.use("/users", UserRouter);

app.listen(PORT, () => {
  console.log(`server is running on port -> PORT -> http://localhost:${PORT}`);
});
