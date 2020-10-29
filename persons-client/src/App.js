import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "../node_modules/antd/dist/antd.css";

import Content from "./Containers/Content/Content";
import Person from "./Containers/Person/Person";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/person/:id">
            <Person />
          </Route>
          <Route path="/">
            <Content />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
