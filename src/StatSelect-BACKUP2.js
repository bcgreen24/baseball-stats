import React, { useState } from "react";
import HRs from "./HR.js";
import Hits from "./Hits.js";
import Era from "./Era.js";
import Avg from "./Avg.js";
import PlayerDetail from "./PlayerDetail.js";

import { Box, SelectMenu, Button, Header } from '@primer/components'
import {ChevronDownIcon} from '@primer/octicons-react'

function StatSelect(props) {

    const components = {
        'HRs': {'component':<HRs />, 'title':'Leading Home Run Hitters'},
        'Hits': {'component':<Hits />,'title':'Leading Home Run Hitters', 'rows':leader_hitting_repeater.leader_hitting_mux.queryResults.row},
        'Era': {'component':<Era />,'title':'Leading Home Run Hitters'},
        'Avg': {'component':<Avg />,'title':'Leading Home Run Hitters'}
    }

    const [header_title, setTitle] = useState();
    const [component, setComponent] = useState();
    const [items, setItems] = useState([]);

    React.useEffect(() => {
        //setComponent(components['HRs']);
        //setTitle('Leading Home Run Hitters');
        //from url_config.json
        fetch(urls.base_url + urls.leading_hitters)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

    }, []);

    return (
        <div>
        
        <Box className="content_box">
            <div>
                {component}
            </div>
        </Box>
        </div>
    );

    function handleChange(e) {
        setComponent(components[e.target.innerText].component);
        setTitle(components[e.target.innerText].title);
    }
}

export default StatSelect;