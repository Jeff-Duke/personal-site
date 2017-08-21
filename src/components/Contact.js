import React from 'react';
import ContactForm from './ContactForm';
import githubIcon from '../../public/images/github-orange.svg';
import twitterIcon from '../../public/images/twitter.svg';
import linkedinIcon from '../../public/images/linkedin.svg';
import mediumIcon from '../../public/images/medium-icon.svg';

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact-container">
        <p>Thanks for stopping by, please reach out if you'd like to chat!</p>
        <div className="contact-info">
          <p className="contact-label">You can contact me here:</p>
          <ContactForm email="jeff.duke@gmail.com"/>
          <div>
            <ul id="social-list">
              <a href="https://github.com/Jeff-Duke">
                <li id="github-icon" className="social-icon">
                  <img src={githubIcon} alt="Github Account"/>
                </li>
              </a>

              <a href="https://www.linkedin.com/in/jeff-duke">
                <li id="linkedin-icon" className="social-icon">
                  <img src={linkedinIcon} alt="Linked In Profile"/>
                </li>
              </a>

              <a href="https://twitter.com/Jeff_Duke_io">
                <li id="twitter-icon" className="social-icon">
                  <img src={twitterIcon} alt="Twittert"/>
                </li>
              </a>

              <a href="https://medium.com/@Jeff_Duke_io">
                <li id="medium-icon" className="social-icon">
                  <img src={mediumIcon} alt="Medium.com page for Jeff Duke"/>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
