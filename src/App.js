import React from "react";
import HR from "./HR.js";
import Hits from "./Hits.js";
import Era from "./Era.js";
import PlayerDetail from "./PlayerDetail.js";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

/*
<Route
  path='/dashboard'
  render={(props) => (
    <Dashboard {...props} isAuthed={true} />
  )}
/>
*/

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route
                            path='/player_detail/:id'
                            render={(props) => 
                                <PlayerDetail {...props} />}                            
                        />
                        <Route path="/" component={App}>
                            <HR />
                            <Hits />
                            <Era />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;

