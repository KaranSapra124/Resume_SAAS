import express from "express";
import Router from "./Routes/UserRoutes";
import cors from "cors";
import { config } from "dotenv";
// const express = require("express")
import { connectDB } from "./Utils/mongodbConfig";
const app = express();
config();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ Parses URL-encoded bodies

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/auth", Router);
app.listen(5000, () => console.log("Server running"));
