import React from 'react';

const ContactForm = (email) => {
  email = email.email;

  return (
  <div className="emailContact">
    <form className="contactForm" method="POST" action={`http://formspree.io/${email}`}>
      <label htmlFor="email">Your Email</label>
      <input aria-label="your email" type="email" name="email" placeholder="Your email" />
      <label htmlFor="message">Your message</label>
      <textarea aria-label="your message" rows="10" name="message" placeholder="Your message"></textarea>
      <button className="emailButton"  type="submit" children="Send"></button>
    </form>  
  </div>
  ) 
}

export default ContactForm;