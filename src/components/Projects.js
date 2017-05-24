import React from 'react';

const Projects = () => {
  return(
    <section id="projects">

      <article className="content-card clearfix">
        <a href="https://github.com/Jeff-Duke/radicchio">
        <div className="card-photo" id="radicchio-photo">
          <img src="./images/radicchio-thumb.png" alt="Thumbnail for radicchio project" />
        </div>
        <div className="card-text">
          <h3>Radicchio</h3>
          <p>
            An automated garden watering system. Included an iot build, backend and front-ends built with various technologies.
          </p>
        </div>
        </a>
        <div className="card-links">
          <a href="https://github.com/Jeff-Duke/radicchio">View the code on GitHub</a>
        </div>
      </article>

      <article className="content-card clearfix">
        <a href="https://shoot-the-breeze-9f4d8.firebaseapp.com">
          <div className="card-photo">
            <img src='./images/shoot-the-breeze-thumb.png' alt="Thumbnail for shoot-the-breeze chat app" />
          </div>
          <div className="card-text">
            <h3 className="card-title">Shoot the Breeze</h3>
            <p>
                A chat app, built in React, utilizing Firebase.
            </p>
          </div>
        </a>
        <div className="card-links">
            <a className="projectLink" href="https://github.com/Jeff-Duke/shoot-the-breeze">View the code on GitHub</a>
        </div>
      </article>
      

      <article className="content-card clearfix">
        <a href="https://tier-2.firebaseapp.com/">
        <div className="card-photo">
          <img src="./images/connectr-thumb.png" alt="Thumbnail for Connectr contact management app" />
        </div>
        <div className="card-text">
          <h3>Connectr</h3>
          <p>
              A contact management app, built in React, utilizing Firebase.
          </p>
        </div>
        </a>
        <div className="card-links">
          <a href="https://github.com/kylem038/tier-2">View the code on GitHub</a>
        </div>
      </article>

      <article className="content-card clearfix">
        <a href="https://casey1449.github.io/Blanched-Almonoid/">
        <div className="card-photo" id="game-time-photo">
          <img src="./images/game-time-thumb.png" alt="Thumbnail for breakout game card" />
        </div>
        <div className="card-text">
          <h3>Gametime</h3>
          <p>
            A browser-based, breakout-style game, made with Javascript and HTML canvas.
          </p>
        </div>
        </a>
        <div className="card-links">
          <a href="https://github.com/Casey1449/Blanched-Almonoid">View the code on GitHub</a>
        </div>
      </article>

    </section>
  )
}

export default Projects;