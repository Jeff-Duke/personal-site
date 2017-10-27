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
              An event management app for the Turing School built in React with Firebase
          </p>
        </div>
        </a>
        <div className="card-links">
          <a href="https://github.com/jeff-duke/turing-fridays">View this project on GitHub</a>
          <a href="https://turing-fridays.firebaseapp.com/">View the app</a>
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
            An IoT automated garden watering system. Built using Node/Express for the back-end and react for the front-end
          </p>
        </div>
        </a>
        <div className="card-links">
          <a href="https://github.com/Jeff-Duke/radicchio">View this project on GitHub</a>
        </div>
      </article>

      <article className="content-card clearfix">
        <a href="https://shoot-the-breeze-9f4d8.firebaseapp.com">
          <div className="card-photo">
            <img src='./images/shoot-the-breeze-thumb.png' alt="Thumbnail for shoot-the-breeze chat app" />
          </div>
          <div className="card-text">
            <h3>Shoot the Breeze</h3>
            <p>
                A chat app, built in React, utilizing Firebase
            </p>
          </div>
        </a>
        <div className="card-links">
            <a href="https://github.com/Jeff-Duke/shoot-the-breeze">View the code on GitHub</a>
            <a href="https://shoot-the-breeze-9f4d8.firebaseapp.com">View the app</a>
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
            A browser-based, breakout-style game, made with Javascript and HTML canvas
          </p>
        </div>
        </a>
        <div className="card-links">
          <a href="https://github.com/Casey1449/Blanched-Almonoid">View this project on GitHub</a>
          <a href="https://casey1449.github.io/Blanched-Almonoid/">Play the game</a>
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
            Open source project I contributed to by adding some documentation
          </p>
        </div>
        </a>
        <div className="card-links">
          <a href="https://github.com/tessel/t2-docs">View this project on GitHub</a>
        </div>
      </article>

      <article className="content-card clearfix">
        <a href="https://github.com/approachable-io/software-interview-prep">
        <div className="card-photo" id="approachable-logo">
          <img src="./images/approachable-open-source-logo.png" alt="Thumbnail for Approachable-io project" />
        </div>
        <div className="card-text">
          <h3>Approachable-io Software Interview Questions</h3>
          <p>
            Open source contribution for Hacktoberfest 2017
          </p>
        </div>
        </a>
        <div className="card-links">
          <a href="https://github.com/approachable-io/software-interview-prep">View this project on GitHub</a>
        </div>
      </article>

      <article className="content-card clearfix">
      <a href="https://www.npmjs.com/package/electron-audio-conversion">
      <div className="card-photo">
        <img src="./images/npm-logo.png" alt="Thumbnail for turing fridays app" />
      </div>
      <div className="card-text">
        <h3>Electron Audio Conversion</h3>
        <p>
            An NPM package for converting audio files to dataUri for Electron
        </p>
      </div>
      </a>
      <div className="card-links">
        <a href="https://github.com/Jeff-Duke/electron-audio-conversion">View this project on GitHub</a>
      </div>
    </article>

    </section>
  )
}

export default Projects;