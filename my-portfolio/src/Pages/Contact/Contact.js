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
    </section>
  );
}

export default Contact;
