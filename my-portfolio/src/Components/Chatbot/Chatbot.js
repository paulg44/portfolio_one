/* 
- make textarea and submit button
- section where chat is displayed (lists?)
- have it as a pop up on each screen
- use an array to add each new message, both from user and chatbot
- reset array (state?) when user clicks off chatbot
- or save locally for if they come back?
- put a delay on the chatbot? so it looks like it's thinking?
*/

import { useEffect, useRef, useState } from "react";
import "./chatbot.css";
import { FaArrowAltCircleUp } from "react-icons/fa";
import profileImg from "../../IMG/my_profile_pic.jpg";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [userQuestion, setUserQuestion] = useState();
  const [chat, setChat] = useState([]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [chat]);

  if (!chat) return null;

  const closeModal = () => setOpen(false);
  const toggleModal = () => setOpen(!open);

  const handleUserQuestion = (e) => {
    setUserQuestion(e.target.value);
  };

  const handleQuestionSubmit = async () => {
    if (!userQuestion.trim()) return;

    const waitingOnMessageArr = [
      "Thinking...",
      "Hmmmmm...",
      "Hand on a sec...",
    ];

    let randomWaitingMessage = Math.floor(
      Math.random() * waitingOnMessageArr.length
    );
    let waitingMessage = waitingOnMessageArr[randomWaitingMessage];

    setChat([...chat, userQuestion, waitingMessage]);
    setUserQuestion("");

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

      const delay = Math.floor(Math.random() * 1000) + 500;
      setTimeout(() => {
        setChat((prevChat) => [...prevChat.slice(0, -1), data.message.content]);
      }, delay);
    } catch (error) {
      console.error("Error sending data to server from client side", error);

      setTimeout(() => {
        setChat((prevChat) => [
          ...prevChat.slice(0, -1),
          "Oops! Something went wrong me duck. Please try again.",
        ]);
      }, 1000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleQuestionSubmit();
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
              <li>Ey up me duck. Ask me about my projects...if you like</li>
              {chat.map((chatText, index) => (
                <li key={index}>
                  <p>{chatText}</p>
                </li>
              ))}
              <div ref={chatEndRef}></div>
            </ul>
            <div className="questionContainer">
              <textarea
                onChange={handleUserQuestion}
                onKeyDown={handleKeyDown}
                value={userQuestion}
                className="chatbotInput"
                id="question"
                name="question"
                rows="0"
                placeholder="What would you like to know?..."
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
