import React from "react";
import HR from "./HR.js";
import Hits from "./Hits.js";
import Era from "./Era.js";
import Avg from "./Avg.js";
import StatSelect from "./StatSelect.js";
import PlayerDetail from "./PlayerDetail.js";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
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
        );
    }
}

export default App;

