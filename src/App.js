import React from "react";
import StatSelect from "./StatSelect";
import HR from "./HR.js";
import Hits from "./Hits.js";
import Era from "./Era.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {value: ''};
    }

    render() {
        return (
            <div>
                <HR />
                <Hits />
                <Era />
            </div>
        );
    }
}
export default App;

