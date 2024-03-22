import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";
import App from "./App";
import Home from "./pages/Home";

const root = document.getElementById("root");

render(
    () => (
        <Router root={App}>
            <Route path="/" component={Home} />
        </Router>
    ),
    root!
);
