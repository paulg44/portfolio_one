/* 
- make textarea and submit button
- section where chat is displayed (lists?)
- have it as a pop up on each screen
- use an array to add each new message, both from user and chatbot
- reset array (state?) when user clicks off chatbot
- or save locally for if they come back?
*/

import { useState } from "react";
import "./chatbot.css";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function Chatbot() {
  const [userQuestion, setUserQuestion] = useState("");
  const [userChat, setUserChat] = useState([]);
  const [computerChat, setcomputerChat] = useState([]);

  const handleUserQuestion = (e) => {
    setUserQuestion(e.target.value);
  };

  const handleUserChat = async () => {
    setUserChat([...userChat, userQuestion]);
    console.log(userChat);
  };

  return (
    <section className="chatbotContainer">
      <div className="chatContainer">
        <ul className="chatBox">
          <li>
            <p>Hello duck! How can I help today?</p>
          </li>
        </ul>
      </div>
      <div className="questionContainer">
        <div className="textInput">
          <textarea
            onChange={handleUserQuestion}
            className="chatbotInput"
            id="question"
            name="question"
            rows="0"
            placeholder="Ask me anything..."
            required
          />
          <button type="submit" onClick={handleUserChat}>
            <FaArrowAltCircleUp />
          </button>
        </div>
      </div>
    </section>
  );
}
