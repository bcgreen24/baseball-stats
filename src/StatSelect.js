import React, { useState } from "react";
import Stats from "./Stats.js";
import urls from "./url_config.json";
//import PlayerDetail from "./PlayerDetail.js";

import { Box, SelectMenu, Button, Header } from '@primer/components'
import {ChevronDownIcon} from '@primer/octicons-react'

function StatSelect() {

    const components = {
        'HRs': 'HRs',
        'Hits': 'Hits',
        'Era': 'Era',
        'Avg': 'Avg'
    }

    const titles = {
        'HRs': "Leading Home Run Hitters",
        'Hits':"Leading Hitters",
        'Era':"Leading Pitchers (ERA)",
        'Avg':"Best Batting Averages"
    }

    const fetch_urls = {
        'Hits': urls.leading_hitters,
        'HRs': urls.leading_hr,
        'Era': urls.leading_pitchers,
        'Avg': urls.avgs
    }

    const data_fields = {
        'HRs':['name_display_first_last', 'hr'],
        'Hits':['name_display_first_last', 'h'],
        'Era':['name_display_first_last', 'era'],
        'Avg':['name_display_first_last', 'avg'],

    }

    const [header_title, setTitle] = useState('Leading Home Run Hitters');
    const [component, setComponent] = useState('HRs');

    return (
        <div>
        <Header>
        <Header.Item><img alt="baseball" className="ball_icon" src="../logo192.png" /></Header.Item>
        <Header.Item>
        <SelectMenu>
                <Button className="stats_menu" as="summary">Choose Stat<ChevronDownIcon size={16} /></Button>
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
                <Stats component_name={component} data_col={component} url={fetch_urls[component]} data_fields={data_fields[component]}/>
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