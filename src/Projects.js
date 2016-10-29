import React from 'react';
import STBThumb from './styles/images/shoot-the-breeze-thumb.png';

const Projects = () => {
  return(
    <section id="projects">
      <article className="content-card clearfix">
                    <div className="card-photo">
                        <img src={STBThumb} alt="Thumbnail for shoot-the-breeze chat app" />
                    </div>
                    <div className="card-text">
                        <h3>Shoot the Breeze</h3>
                        <p>
                            A chat app, built in React, utilizing Firebase.
                        </p>
                    </div>
                    <div className="card-links">
                        <a href="https://github.com/Jeff-Duke/shoot-the-breeze">View on GitHub</a>
                        <a href="https://shoot-the-breeze-9f4d8.firebaseapp.com/">View the app</a>
                    </div>
                </article>
    </section>
  )
}

export default Projects;