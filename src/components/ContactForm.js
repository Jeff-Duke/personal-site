import React from 'react';

const ContactForm = (email) => {
  return (
  <div className="contactForm">
    <form method="POST" action={`http://formspree.io/${email}`}>
      <label htmlFor="email">Your Email</label>
      <input type="email" name="email" placeholder="Your email" />
      <label htmlFor="message">Your message</label>
      <textarea name="message" placeholder="Your message"></textarea>
      <button type="submit" children="Send"></button>
    </form>  
  </div>
  ) 
}

export default ContactForm;