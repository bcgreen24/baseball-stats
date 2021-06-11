import React, { useState } from "react";
import HRs from "./HR.js";
import Hits from "./Hits.js";
import Era from "./Era.js";
import Avg from "./Avg.js";
import { Box, SelectMenu, Button, Header } from '@primer/components'
import {ChevronDownIcon} from '@primer/octicons-react'

function StatSelect() {

    const components = {
        'HRs': <HRs />,
        'Hits': <Hits />,
        'Era': <Era />,
        'Avg': <Avg />
    }

    const titles = {
        'HRs': "Leading Home Run Hitters",
        'Hits':"Leading Hitters",
        'Era':"Leading Pitchers (ERA)",
        'Avg':"Best Batting Averages"
    }

    const [header_title, setTitle] = useState();

    const [component, setComponent] = useState();

    React.useEffect(() => {
        setComponent(components['HRs']);
        setTitle('Leading Home Run Hitters');
    }, []);

    return (
        <div>
        <Header>
        <Header.Item><img alt="baseball" className="ball_icon" src="logo192.png" /></Header.Item>
        
        <Header.Item>
        <SelectMenu>
                <Button className="stats_menu" as="summary">Choose a Stat<ChevronDownIcon size={16} /></Button>
                <SelectMenu.Modal align="center" className="menu_container">
                    <SelectMenu.List className="stats_menu">
                        <SelectMenu.Item href="#" onClick={handleChange}>HRs</SelectMenu.Item>
                        <SelectMenu.Item href="#" onClick={handleChange}>Hits</SelectMenu.Item>
                        <SelectMenu.Item href="#" onClick={handleChange}>Avg</SelectMenu.Item>
                        <SelectMenu.Item href="#" onClick={handleChange}>Era</SelectMenu.Item>
                    </SelectMenu.List>
                </SelectMenu.Modal>
            </SelectMenu>
        </Header.Item>
        <Header.Item>{header_title}</Header.Item>
        </Header>
        <Box className="content_box">
            <div>
                {component}
            </div>
        </Box>
        </div>
    );

    function handleChange(e) {
        setComponent(components[e.target.innerText]);
        setTitle(titles[e.target.innerText]);
    }
}

export default StatSelect;