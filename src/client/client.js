import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import createStore from "../store/store";
import { indexRoutes } from "../routers/routes";

const store = createStore( window.REDUX_DATA );

const jsx = (
    <ReduxProvider store={ store }>
        <Router>
            <Switch>
                {indexRoutes.map((prop, key) => (
                    <Route exact path={prop.path}  component={prop.component} key = {key} />
                ))}
            </Switch>
        </Router>
    </ReduxProvider>
);

const app = document.getElementById( "app" );
ReactDOM.hydrate( jsx, app );
