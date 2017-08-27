import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import App from "./components/App";
import {Signup} from "./components/Signup";
import {Reducer} from "./reducer";
import {store} from "./store";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/signup" component={Signup}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById("root")
);
