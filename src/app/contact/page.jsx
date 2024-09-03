import React from 'react';
import styles from './contact.module.css';
import ContactForm from '../zComponents/mobile/contact_form';

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactContainer}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.email}>Irving00morales@Gmail.Com</p>
        <p className={styles.handle}>@WwIrvingwW</p>
        <p className={styles.name}>Irving-Acosta</p>
      </div>
      
      <div className={styles.imageContainer}>
        <img src="https://i.pinimg.com/564x/65/97/05/6597056913e5e8343f6d5e7f05d77ff5.jpg" alt="Contact Image" className={styles.contactImage} />
        <div className={styles.overlay}>
          <div className={styles.circle}>
            <span className={styles.circleText}>Hablemos</span>
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <p className={styles.contactText}>
          Si te interesa ponerte en contacto puedes hacerlo a través del siguiente formulario.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
