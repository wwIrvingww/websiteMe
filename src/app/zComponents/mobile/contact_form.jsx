import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact_form.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      user_name: form.current.user_name.value, // Usar user_name en lugar de from_name
      subject: form.current.subject.value,
      user_phone: form.current.user_phone.value,
      message: form.current.message.value,
      user_email: form.current.user_email.value,
    };

    emailjs.send("service_4x12v4l", "template_706hhg9", formData, "dM1cUDoKgsER5yeoD")
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Mensaje enviado con éxito");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Hubo un error al enviar el mensaje");
        }
      );
  };

  return (
    <div className="formContainer">
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="user_name" className="formInput" required />
        </div>
        <div className="formGroup">
          <label htmlFor="phone">Your Phone</label>
          <input type="text" id="phone" name="user_phone" className="formInput" />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" className="formInput" required />
        </div>
        <div className="formGroup">
          <label htmlFor="subject">Asunto</label>
          <input type="text" id="subject" name="subject" className="formInput" />
        </div>
        <div className="formGroup lastGroup">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" className="formTextarea" required></textarea>
        </div>
        <button type="submit" className="formButton">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
