import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { StartPage } from "../pages";

function MainRoute() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/start" />
                </Route>
                <Route path="/start">
                    <StartPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default MainRoute;
