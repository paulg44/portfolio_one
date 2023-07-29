// Contact From Component
import './Form.css';
import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [text, setText] = useState('');

  return (
    <form name="contact" class="form" netlify>
      <input type="hidden" name="form-name" value="contact" />
      <div class="left-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="phone">Phone No</label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>
      <div class="right-form">
        <textarea
          name="text"
          placeholder="Anything to add..."
          value={text}
          onChange={e => setText(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;
