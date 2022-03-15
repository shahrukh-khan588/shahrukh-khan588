
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from "../components/main_layout/Layout";
import Home from "../pages/HomePage/index.js";
import Mountains from "../pages/Mountains/index";
import ThingToDo from "../pages/ThingToDo/index"
const Routing = () => {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route exact path="/mountains" >
          <Layout>
            <Mountains />
          </Layout>
        </Route>
        <Route exact path="/thingstodo" >
          <Layout>
            <ThingToDo/>
          </Layout>
        </Route>
        <Route>
          <h4> Not Found </h4>
        </Route>
      </Switch>
     </Router>
     </div>
  );
};

export default Routing;
