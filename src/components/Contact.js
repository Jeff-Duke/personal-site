import React from 'react';

const Contact = () => {
    return(
        <div className="contact">
          <section className="contact-container">
            <div className="headshot"></div>
            <p>Thanks for stopping by</p>
            <p>I am currently looking for work</p>
            <div className="contact-info">
              <p>You can contact me here:</p>
              <ul>
                <a href="https://twitter.com/Jeff_Duke_io"><li className="twitter-icon">Find me on Twitter</li></a>
              </ul>
            </div>
          </section>
        </div>
    );
}

export default Contact;