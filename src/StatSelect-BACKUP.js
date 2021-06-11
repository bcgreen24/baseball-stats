import React, { useState } from "react";
import HRs from "./HR.js";
import Hits from "./Hits.js";
import Era from "./Era.js";
import Avg from "./Avg.js";
import { Box, Flex, Dropdown, SelectMenu, Button } from '@primer/components'

function StatSelect() {

    const components = {
        'HRs': <HRs />,
        'Hits': <Hits />,
        'Era': <Era />,
        'Avg': <Avg />
    }

    const [component, setComponent] = useState();

    React.useEffect(() => {
        setComponent(components['HRs']);
    }, []);

    return (


        <div className="wrapper">
            <SelectMenu>
            <Button as="summary">Stats</Button>
            <SelectMenu.Modal>
                <SelectMenu.Header>Stats</SelectMenu.Header>
                <SelectMenu.List>
                <SelectMenu.Item href="#" onClick={handleChange}>HRs</SelectMenu.Item>
                <SelectMenu.Item href="#" onClick={handleChange}>Hits</SelectMenu.Item>
                <SelectMenu.Item href="#" onClick={handleChange}>Avg</SelectMenu.Item>
                <SelectMenu.Item href="#" onClick={handleChange}>Era</SelectMenu.Item>
                </SelectMenu.List>
            </SelectMenu.Modal>
            </SelectMenu>
            <div className="dropdown">
                <button className="btn dropdown-toggle btn-secondary"
                    id="stat_select" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Choose Stat
                    </button>
                <ul className="dropdown-menu" >
                    <div className="dropdown-content">
                        <li><a href="#" className="dropdown-item" onClick={handleChange}>HRs</a></li>
                        <li><a href="#" className="dropdown-item" onClick={handleChange}>Hits</a></li>
                        <li><a href="#" className="dropdown-item" onClick={handleChange}>Avg</a></li>
                        <li><a href="#" className="dropdown-item" onClick={handleChange}>Era</a></li>
                    </div>
                </ul>
            </div>
            <div>
                {component}
            </div>
        </div>
    );

    function handleChange(e) {
        setComponent(components[e.target.innerText]);
        console.log(e.target.innerText);
    }
}

export default StatSelect;