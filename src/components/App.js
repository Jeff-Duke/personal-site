import React from 'react';
import { Link } from 'react-router';

const App = () => {
  return (
    <div className="App">
      <article className="hero">
          <p className="hero-text">
            Hello world!  My name is Jeff.  I enjoy solving problems, making robots and creating things for the web! <Link className="hero-link" to="/Contact">Contact me here</Link>
          </p>
      </article>
    </div>
  )
}

export default App;