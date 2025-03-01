// Server file

import express from "express";
import pkg from "pg";
import cors from "cors";
import dotenv from "dotenv";
import { rateLimit } from "express-rate-limit";
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

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 2,
  message: { error: "Too many requests! Please wait before trying again" },
  standardHeaders: true,
  legacyHeaders: false,
  // keyGenerator: (req) => req.headers["x-api-key"] || req.ip,
});

app.use(limiter);
app.use(
  cors({
    origin: `${process.env.REACT_APP_FRONTEND_URL_PROD}`,
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://paulgarton.co.uk");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.options("*", cors());
app.use(express.json());

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const openai = new OpenAI({ apiKey });

app.post("/user-question", limiter, async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).send({ error: "Question is required" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant",
        },
        {
          role: "developer",
          content: [
            {
              type: "text",
              text: "You are an assistant that answers questions in the style of someone from the Alvaston area of Derby. I want you to add some local dialect, and mention Derby County football club every now and again. Also don't actually mention Alvaston the place.",
            },
          ],
        },
        {
          role: "user",
          content: `${question}`,
        },
      ],
      store: true,
    });

    const answer = completion.choices[0].message;

    res.status(200).json({ message: answer });
  } catch (error) {
    console.error("Error reading question in server", error);
    res.status(500).send({ error: "Failed to read the question in server" });
  }
});

app.use("/api/blogs", blogRoutes);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
