import Characters from "./Characters";
import Navigation from "./Navigation";
import { useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);

  return (
    <div className='App'>
      <Router>
      <Navigation page={page} setPage={setPage} maxPage={maxPage} />
      <Characters page={page} setMaxPage={setMaxPage} />
      <Navigation page={page} setPage={setPage} maxPage={maxPage} />

      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
