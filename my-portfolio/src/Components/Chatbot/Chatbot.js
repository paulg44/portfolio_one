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
import profileImg from "../../IMG/my_profile_pic.jpg";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  const [userQuestion, setUserQuestion] = useState("");
  const [chat, setChat] = useState([]);

  const closeModal = () => setOpen(false);
  const toggleModal = () => setOpen(!open);

  const handleUserQuestion = (e) => {
    setUserQuestion(e.target.value);
  };

  const handleQuestionSubmit = async () => {
    try {
      const response = await fetch(
        // "http://localhost:4002/user-question",
        "https://portfolio-one-dr9n.onrender.com/user-question",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            question: userQuestion,
          }),
        }
      );

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
      <button className="popUpBtn" onClick={toggleModal}>
        How can I help?...
        <img src={profileImg} alt="user icon" />
      </button>

      {open && (
        <>
          <div
            className="backgroundOverlay"
            onClick={() => setOpen(false)}
          ></div>
          <div className={`chatContainer ${open ? "open" : ""}`}>
            <button className="closeModal" onClick={closeModal}>
              &times;
            </button>
            <ul className="chatBox">
              {chat.map((chatText, index) => (
                <li key={index}>
                  <p>{chatText}</p>
                </li>
              ))}
            </ul>
            <div className="questionContainer">
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
              <button
                type="submit"
                className="chatSubmitBtn"
                onClick={handleQuestionSubmit}
              >
                <FaArrowAltCircleUp />
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
