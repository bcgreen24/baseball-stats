import React from "react";
import StatSelect from "./StatSelect.js";
import PlayerDetail from "./PlayerDetail.js";
import {ThemeProvider} from '@primer/components'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <ThemeProvider>
            <Router>
                <div className="container">
                    <Switch>
                        <Route
                            path='/player_detail/:id'
                            render={() =>
                                <PlayerDetail />}
                        />
                        <Route path="/">
                            <StatSelect/>
                        </Route>
                    </Switch>
                </div>
            </Router>
            </ThemeProvider>
        );
    }
}

export default App;

