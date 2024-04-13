// Server file

import express from "express";
import pkg from "pg";
import cors from "cors";
import dotenv from "dotenv";
import { blogRoutes } from "./routes.js";

dotenv.config();

const { Pool } = pkg;
const app = express();

const port = process.env.REACT_APP_PORT;
const connectionString = process.env.REACT_APP_BLOG_DB_STRING;

export const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(express.json());
app.use(cors());
// app.use("https://paulgarton.com/blogs", blogRoutes);
app.use("/api/blogs", blogRoutes);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
