import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/css/index.css';
import App from './components/App';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Root = () => {
  return (
    <Router>
      <section>
        <Navigation />
        <Switch>
          <Route exact path="/" component={ App } />
          <Route exact path="/projects" component={ Projects } />
          <Route exact path="/contact" component={ Contact } />
          <Route render={() => <p className="routingError">Not Found!</p>} />
        </Switch>
      </section>
    </Router>
  )
}

render(<Root />, document.querySelector("#root"));

