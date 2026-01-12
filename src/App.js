import React from "react";
import StarBackground from "./StarBackground";
import "./App.css";
import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import DevBlog from "./DevBlog";
import Footer from "./Footer";
import CosmicText from "./CosmicText";
// import About from './About';
// import Contact from './Contact';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
  <Router>
    <StarBackground />
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/blog">
              <DevBlog />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
