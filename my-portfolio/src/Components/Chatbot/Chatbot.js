/* 
- make textarea and submit button
- section where chat is displayed (lists?)
- have it as a pop up on each screen
- use an array to add each new message, both from user and chatbot
- reset array (state?) when user clicks off chatbot
- or save locally for if they come back?
*/

import "./chatbot.css";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function Chatbot() {
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
            className="chatbotInput"
            id="question"
            name="question"
            rows="0"
            placeholder="Ask me anything..."
            required
          />
          <button type="submit">
            <FaArrowAltCircleUp />
          </button>
        </div>
      </div>
    </section>
  );
}
