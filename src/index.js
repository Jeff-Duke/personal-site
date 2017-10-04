import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { initialize, set, pageview } from 'react-ga';

import './styles/css/index.css';
import App from './components/App';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Contact from './components/Contact';

initialize('UA-99794039-1');

const logPageView = () => {
  set({ page: window.location.pathname + window.location.search });
  pageview(window.location.pathname + window.location.search);
};

const Root = () => {
  return (
    <Router onUpdate={logPageView} >
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

render(<Root onUpdate={logPageView}/>, document.querySelector("#root"));
