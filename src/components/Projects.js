import React from 'react';

const Projects = () => {
  return(
    <section id="projects">

      <article className="content-card clearfix">
        <a href="https://turing-fridays.firebaseapp.com/">
        <div className="card-photo">
          <img src="./images/turing-fridays.png" alt="Thumbnail for turing fridays app" />
        </div>
        <div className="card-text">
          <h3>Turing-Fridays</h3>
          <p>
              An event management app for the Turing School.
          </p>
        </div>
        </a>
        <div className="card-links">
          <a href="https://github.com/jeff-duke/turing-fridays">View the code on GitHub</a>
        </div>
      </article>

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

      <article className="content-card clearfix">
        <a href="https://github.com/tessel/t2-docs">
        <div className="card-photo" id="tessel-photo">
          <img src="./images/tessel2.png" alt="Thumbnail for Tessel project" />
        </div>
        <div className="card-text">
          <h3>Tessel</h3>
          <p>
            Open source project I contributed to by adding some documentation.
          </p>
        </div>
        </a>
        <div className="card-links">
          <a href="https://github.com/tessel/t2-docs">View this project on GitHub</a>
        </div>
      </article>

    </section>
  )
}

export default Projects;