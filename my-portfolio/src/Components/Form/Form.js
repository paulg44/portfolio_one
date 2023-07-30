// Contact From Component
import './Form.css';
import { Link } from 'react-router-dom';

function ContactForm() {
  return (
    <form method="POST" name="contact" class="form" netlify>
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
        <Link to="/submission">
          <button type="submit">Submit</button>
        </Link>
      </div>
    </form>
  );
}

export default ContactForm;
