import React, { useState } from "react";
import HR from "./HR.js";
import Hits from "./Hits.js";
import Era from "./Era.js";
import Avg from "./Avg.js";

function StatSelect() {
    
    const components = {
        'HR': <HR />,
        'Hits': <Hits />,
        'Era': <Era />,
        'Avg': <Avg />
    }

    const [component, setComponent] = useState(components['HR']);

    return (
        <div class="wrapper">
        <form>
            <select onChange={handleChange}>
                <option value="HR">HRs</option>
                <option value="Hits">Hits</option>
                <option value="Avg">Avg</option>
                <option value="Era">ERA</option>
            </select>
        </form>
        <div class="component">
            {component}
        </div>
        </div>
    );

    function handleChange(e) {
        setComponent(components[e.target.value]);
    }
}



export default StatSelect;