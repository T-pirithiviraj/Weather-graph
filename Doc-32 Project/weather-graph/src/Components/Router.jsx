import React from "react";
import Form from "./Form.jsx";
import Graph from "./Graph.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function BasicRouter() {         // Routing setup for this project
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Form />                
                    </Route>
                    <Route exact path="/Graph">
                        <Graph />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}