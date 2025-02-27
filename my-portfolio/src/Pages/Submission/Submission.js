// Component for successful submission
import "./Submission.css";
import smiley from "../../IMG/vecteezy_3d-render-emoticon-or-emoji-perfect-for-sosial-media_10196114_814-removebg-preview.jpg";

function Submission() {
  return (
    <div className="submission">
      <h2>Thank you for your submission!</h2>
      <p>
        I will be in touch in due course. Thank you for taking the time to look
        through my portfolio, and lastly, have a nice day!
      </p>
      <img src={smiley} alt="smiley emoji faces" />
    </div>
  );
}

export default Submission;
