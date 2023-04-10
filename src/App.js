import React from "react";
import { Route, Switch } from "react-router-dom";
import Form from "./Components/Form";
import Home from "./Components/Home";
import Order from "./Components/Order";

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/pizza">
          <Form />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
