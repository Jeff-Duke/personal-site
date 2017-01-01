import React from 'react';

const Contact = () => {
    return(
        <div className="contact">
          <section className="contact-container">
            <div className="headshot"></div>
            <p>Thanks for stopping by!</p>
            <p>I am currently <span className="looking">looking</span> for work</p>
            <div className="contact-info">
              <p className="contact-label">You can contact me here:</p>
              <div>
                <ul id="social-list">
                  <a href="https://github.com/Jeff-Duke">
                    <li id="github-icon"></li>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/jeff-duke">
                    <li id="linkedin-icon"></li>
                  </a>

                  <a href="https://twitter.com/Jeff_Duke_io">
                    <li id="twitter-icon"></li>
                  </a>
                </ul>
              </div>
            </div>
          </section>
        </div>
    );
}

export default Contact;