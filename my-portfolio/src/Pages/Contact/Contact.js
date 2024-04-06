// Component for Contact Page

import './Contact.css';
import ContactForm from '../../Components/Form/Form';

function Contact() {
  return (
    <section id="contact" class="contact">
      {/* <!-- Contact Form --> */}
      <div class="contact-form">
        <ContactForm />
      </div>
      <a href="mailto: paulgarton1984@hotmail.com" className="email">
        paulgarton1984@hotmail.com
      </a>
    </section>
  );
}

export default Contact;
