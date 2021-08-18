import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { StartPage, MainPage, TopPage, FAQPage } from "../pages";

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
                <Route path="/main">
                    <MainPage />
                </Route>
                <Route path="/top">
                    <TopPage />
                </Route>
                <Route path="/faq">
                    <FAQPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default MainRoute;
