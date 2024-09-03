import React from 'react';
import './contact_form.css';

const ContactForm = () => {
  return (
    <div className="formContainer">
      <form>
        <div className="formGroup">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" className="formInput" />
        </div>
        <div className="formGroup">
          <label htmlFor="phone">Your Phone</label>
          <input type="text" id="phone" name="phone" className="formInput" />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="formInput" />
        </div>
        <div className="formGroup">
          <label htmlFor="subject">Asunto</label>
          <input type="text" id="subject" name="subject" className="formInput" />
        </div>
        <div className="formGroup lastGroup">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" className="formTextarea"></textarea>
        </div>
        <button type="submit" className="formButton">SEND</button>
      </form>
    </div>
  );
}

export default ContactForm;
