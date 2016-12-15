import React from 'react';

const Projects = () => {
  return(
    <section id="projects">
      <article className="content-card clearfix">
        <div className="card-photo">
          <img src='./images/shoot-the-breeze-thumb.png' alt="Thumbnail for shoot-the-breeze chat app" />
        </div>
        <div className="card-text">
          <h3 className="card-title">Shoot the Breeze</h3>
          <p>
              A chat app, built in React, utilizing Firebase.
          </p>
        </div>
        <div className="card-links">
          <a href="https://github.com/Jeff-Duke/shoot-the-breeze">View on GitHub</a>
          <a href="https://shoot-the-breeze-9f4d8.firebaseapp.com/">View the app</a>
        </div>
      </article>

      <article className="content-card clearfix">
        <div className="card-photo">
          <img src="./images/connectr-thumb.png" alt="Thumbnail for Connectr contact management app" />
        </div>
        <div className="card-text">
          <h3>Connectr</h3>
          <p>
              A contact management app, built in React, utilizing Firebase.
          </p>
        </div>
        <div className="card-links">
          <a href="https://github.com/kylem038/tier-2">View on GitHub</a>
          <a href="">View the app</a>
        </div>
      </article>

      <article className="content-card clearfix">
        <div className="card-photo" id="game-time-photo">
          <img src="./images/game-time-thumb.png" alt="Thumbnail for breakout game card" />
        </div>
        <div className="card-text">
          <h3>Gametime</h3>
          <p>
            A browser-based, breakout-style game, made with Javascript and HTML canvas.
          </p>
        </div>
        <div className="card-links">
          <a href="https://github.com/Casey1449/Game-Time">View on GitHub</a>
          <a href="https://casey1449.github.io/Game-Time/">Play the game</a>
        </div>
      </article>

    </section>
  )
}

export default Projects;