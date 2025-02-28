// Server file

import express from "express";
import pkg from "pg";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
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
app.options("*", cors());

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const openai = new OpenAI({ apiKey });

app.post("user-question", async (req, res) => {
  if (!question) {
    return res.status(400).send({ error: "Question is required" });
  }
});

app.use("/api/blogs", blogRoutes);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
