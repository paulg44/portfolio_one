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

const connectionString = process.env.REACT_APP_BLOG_DB_STRING;

export const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.set("trust proxy", 1);

app.use(
  cors({
    // origin: `${process.env.REACT_APP_FRONTEND_URL_PROD}`,
    origin: "https://paulgarton.com",
    credentials: true,
  })
);

// app.use(cors());
app.options("*", cors());
app.use(express.json());

const port = process.env.REACT_APP_PORT;

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
const openai = new OpenAI({ apiKey });

app.post("/user-question", async (req, res) => {
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
