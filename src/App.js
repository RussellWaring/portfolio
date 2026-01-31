import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import StarBackground from "./StarBackground";
import CosmicText from "./CosmicText";

import Navbar from "./Navbar";
import Home from "./Home";
import Portfolio from "./Portfolio";
import DevBlog from "./DevBlog";
import Footer from "./Footer";

import "./App.css";
import "./Home.css";
import "./Navbar.css";
import "./Footer.css";

function AppInner() {
  const location = useLocation();

  // Default theme is dark
  const [theme, setTheme] = useState("dark");

  // Apply theme to <body> so CSS variables react
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <>
      <StarBackground theme={theme} />

      <div className="App">
        <Navbar theme={theme} setTheme={setTheme} />

        {/* CosmicText remounts on every route change */}
        <CosmicText key={location.pathname}>
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
        </CosmicText>

        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}
