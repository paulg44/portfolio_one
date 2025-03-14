import portfolioData from "./portfolioData.json";

export default function handleUserKeyWords(question) {
  let userKeyWords = "";
  let foundUserKeyWords = false;

  // Add a question for each likely thing to be asked
  if (question.toLowerCase().includes("tech stack")) {
    userKeyWords = `Paul's main tech stack includes ${portfolioData.techAndInterview.techStack.join(
      ", "
    )}`;
    foundUserKeyWords = true;
  }
}
