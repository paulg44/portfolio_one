import fs from "fs-extra";

const portfolioData = JSON.parse(
  fs.readFileSync("./portfolioData.json", "utf-8")
);

export default function handleUserKeyWords(question) {
  let userKeyWords = "";
  let foundUserKeyWords = false;
  const questionToLowerCase = question.toLowerCase();

  const topics = [
    // Add a question for each likely thing to be asked
    {
      keywords: ["tech stack", "skills"],
      response: `My main tech stack includes ${portfolioData.techAndInterview.techStack}. I enjoy working with React and Node.js, but I am always keen to learn new technologies.`,
    },
    {
      keywords: ["testing", "test"],
      response: `Paul has experience with Jest, React Testing Library, and Playwright. He even built a web scraper using Playwright! ${portfolioData}`,
    },
    {
      keywords: ["api", "api's", "API", "API's"],
      response: `Paul has worked with APIs like the FA API for live football data and Stripe for payments and a dictionary application ${portfolioData.projects[4]}.`,
    },
    {
      keywords: [
        "best project",
        "most impressive project",
        "project highlight",
      ],
      response: `Paul's standout project is the Shardlow St James FC website, ${portfolioData.projects[0]} which integrates live match data from the FA API and scrapes Instagram posts.`,
    },
    {
      keywords: ["ai", "machine learning"],
      response: `Paul built "Ivy’s Game," an educational AI-powered game where users copy images, and an AI scores them based on accuracy. ${portfolioData.projects[2]}`,
    },
    {
      keywords: ["e-commerce", "payments"],
      response: `Paul has integrated Stripe for handling payments in a past project.`,
    },
    {
      keywords: ["career goals", "where do you see yourself"],
      response: `Paul is looking for his first tech role. Coming from a background in decorating, he's eager to apply his problem-solving skills to real-world software projects. ${portfolioData.aboutMe.goals}`,
    },
    {
      keywords: ["why tech", "career change"],
      response: `Paul moved from painting & decorating to software because of his love for problem-solving and creativity.`,
    },
    {
      // Maybe separate this one out once I have got all the json for each different thing
      keywords: ["problem solving", "troubleshooting", "transferrable skills"],
      response: `Paul has strong problem-solving skills. His previous career required troubleshooting unpredictable issues, which translates well into software development. ${projectData.techAndInterview.transferrableSkills}`,
    },
    {
      keywords: ["teamwork", "collaboration"],
      response: `Paul enjoys working in teams and has excellent communication skills from working closely with clients in his previous career.`,
    },
    {
      keywords: ["derby", "local area"],
      response: `Paul is from Derby and knows plenty about the city! He supports Derby County FC and loves the local running trails.`,
    },
  ];

  for (const topic of topics) {
    if (
      topic.keywords.some((keyword) => questionToLowerCase.includes(keyword))
    ) {
      userKeyWords = topic.response;
      foundUserKeyWords = true;
      break;
    }
  }

  return { userKeyWords, foundUserKeyWords };
}
