// Server file

import express from "express";
import pkg from "pg";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs-extra";
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

// app.use(
//   cors({
//     // origin: `${process.env.REACT_APP_FRONTEND_URL_PROD}`,
//     origin: "https://paulgarton.com",
//     credentials: true,
//   })
// );

app.use(cors());
app.options("*", cors());
app.use(express.json());

const port = process.env.REACT_APP_PORT;

// const portfolioData = JSON.parse(
//   fs.readFileSync("./portfolioData.json", "utf8")
// );

const portfolioData = {
  name: "Paul",
  location: "Derby",
  age: 42,
  family: "Wife and two children (7 + 5)",
  bio: "I am a software developer based in Derby",
  goals: "I am looking for my first role within the tech community",
  projects: [
    {
      name: "Shardlow St James FC",
      description:
        "A complete website for a local amateur football club. It uses the FA API to integrate the 4 teams fixtures, results and table data. Has a web scraper built using Playwright to scrape data from Instagram.",
      techStack:
        "React, Node.js, Express, Framer Motion, Nock, React Testing Library, React Router, React Spring, Playwright, FS-Extra, node-cron, simple-git",
      website: "https://ssjfc.co.uk/",
    },
    {
      name: "AMH Decorating",
      description:
        "A complete website for a local painter and decorator to be more visual and generate more custom. Built from scratch using Figma and designed in collaboration with the client",
      techStack: "React, React Testing Library, React Router",
      website: "https://amhdecorating.co.uk/",
    },
  ],
};

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
          role: "developer",

          content: `You are an assistant that answers questions in the style of a local from Derby, UK. You can ONLY answer questions about: - Paul's portfolio and projects - Paul himself - The city of Derby (history, culture, landmarks, sports. If a question is unrelated say: "Sorry I can only chat about Paul or Derby, my duck!" Add some local dialect and humour. Here is some information about Paul and his projects: ${JSON.stringify(
            portfolioData
          )}`,
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
