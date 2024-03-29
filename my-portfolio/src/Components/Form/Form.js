// Contact From Component
import './Form.css';

function ContactForm() {
  return (
    <form
      method="POST"
      name="contact"
      // action="../../Pages/Submission/Submission"
      class="form"
      netlify
    >
      <input type="hidden" name="form-name" value="contact" />
      <div class="left-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" required />
        <label htmlFor="phone">Phone No</label>
        <input type="number" id="phone" name="phone" />
      </div>
      <div class="right-form">
        <textarea name="text" placeholder="Anything to add..."></textarea>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;
