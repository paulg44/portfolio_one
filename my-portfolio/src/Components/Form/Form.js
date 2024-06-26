// Contact From Component
import "./Form.css";

function ContactForm() {
  return (
    <form
      method="POST"
      name="contact"
      // action="../../Pages/Submission/Submission"
      className="form"
      netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="left-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" required />
        <label htmlFor="phone">Phone No</label>
        <input type="number" id="phone" name="phone" />
      </div>
      <div className="right-form">
        <textarea name="text" placeholder="Anything to add..."></textarea>
        <button type="submit" data-testid="submitBtn">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
