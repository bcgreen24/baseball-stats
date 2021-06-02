import React from "react";
import StatSelect from "./StatSelect";
import HR from "./HR.js";
import Hits from "./Hits.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {value: ''};
    }

    render() {
        return(
            <div>
                <HR />
                <Hits />
            </div>
        );
}
}
export default App;

