/* 
- make textarea and submit button
- section where chat is displayed (lists?)
- have it as a pop up on each screen
- use an array to add each new message, both from user and chatbot
- reset array (state?) when user clicks off chatbot
- or save locally for if they come back?
- put a delay on the chatbot? so it looks like it's thinking?
*/

import { useState } from "react";
import "./chatbot.css";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Popup } from "reactjs-popup";
import profileImg from "../../IMG/my_profile_pic.jpg";

export default function Chatbot() {
  const [userQuestion, setUserQuestion] = useState("");
  const [chat, setChat] = useState([]);

  const handleUserQuestion = (e) => {
    setUserQuestion(e.target.value);
  };

  const handleQuestionSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4002/user-question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userQuestion,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Data sent successfully to server", data);
      setChat([...chat, userQuestion, data.message.content]);
      setUserQuestion("");
    } catch (error) {
      console.error("Error sending data to server from client side", error);
    }
  };

  return (
    <section className="chatbotContainer">
      <Popup
        trigger={
          <button className="popUpBtn">
            How can I help?...
            <img src={profileImg} alt="user icon" />
          </button>
        }
        position={"top"}
      >
        <div className="chatContainer">
          <ul className="chatBox">
            {chat.map((chatText, index) => (
              <li key={index}>
                <p>{chatText}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="questionContainer">
          <div className="textInput">
            <textarea
              onChange={handleUserQuestion}
              value={userQuestion}
              className="chatbotInput"
              id="question"
              name="question"
              rows="0"
              placeholder="How can I help duck?"
              required
            />
            <button type="submit" onClick={handleQuestionSubmit}>
              <FaArrowAltCircleUp />
            </button>
          </div>
        </div>
      </Popup>
    </section>
  );
}
