import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Colors from "./components/Colors";
import Four from "./components/Four";
import Hello from "./components/Hello";
import Home2 from "./components/Home2";


function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/home" className="btn btn-dark">
           Home
          </Link>
          <Link to="/4" className="btn btn-dark">
            Four
          </Link>
          <Link to="/hello" className="btn btn-dark">
            Hello
          </Link>
          <Link to="/blue/red" className="btn btn-dark">
            Colors
          </Link>
        </div>
      <Switch>
        <Route path="/home">
         <Home2/>
        </Route>
        <Route path="/4">
          <Four/>
        </Route>
        <Route path="/hello">
          <h2>The world is : hello</h2>
        </Route>
        <Route path="/blue/red">
         <Colors/>
        </Route>
        <Route path="/">
          <Hello/>
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
