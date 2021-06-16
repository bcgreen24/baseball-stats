import React, { useState } from "react";
import Stats from "./Stats.js";
import config from "./url_config.json";

import { Box, SelectMenu, Button, Header } from '@primer/components'
import { ChevronDownIcon } from '@primer/octicons-react'

function StatSelect() {

    const [header_title, setTitle] = useState('Leading Home Run Hitters');
    const [component, setComponent] = useState('HRs');

    return (
        <div>
            <Header>
                <Header.Item><img alt="baseball" className="ball_icon" src="../logo192.png" /></Header.Item>
                <Header.Item>
                    <SelectMenu>
                        <Button className="stats_menu" as="summary">Choose Stat<ChevronDownIcon size={16} /></Button>
                        <SelectMenu.Modal align="center">
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
                    <Stats component_name={component} data_col={component} url={config.fetch_urls[component]} data_fields={config.data_fields[component]} />
                </div>
            </Box>
        </div>
    );

    function handleChange(e) {
        console.log("Component: " + component);
        setComponent(config.components[e.target.innerText]);
        setTitle(config.titles[e.target.innerText]);
    }
}

export default StatSelect;