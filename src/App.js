import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Pass from "./components/pages/Pass";
import Runner from "./components/pages/runner";
import Portfo from "./components/pages/port";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/pass" component={Pass} />
        <Route exact path="/runner" component={Runner}/>
        <Route exact path="/port" component={Portfo}/>
      </div>
    </Router>
  );
}

export default App;
