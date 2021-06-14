import React, { useState, useEffect } from "react";
import urls from "./url_config.json";

function Data() {
    const baseURL = "/player_detail/"
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    //const [statType, setStatType] = useState('HRs');

    const data = {
        'HRs': {
            'url': urls.leading_hr,
            'row': 'result.leader_hitting_repeater.leader_hitting_mux.queryResults.row',
            'stat_heading': 'Home Runs',
            'cell_text': 'item.name_display_first_last'
        }
    }

    useEffect(() => {
        //setStatType('HRs');
        //from url_config.json
        fetch(urls.base_url + data.HRs.url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.leader_hitting_repeater.leader_hitting_mux.queryResults.row);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return (<div className="status">Error: {error.message}</div>);
    } else if (!isLoaded) {
        return (<div className="status"><img className='tiny_image' src='./loading.gif'/></div>);
    } else {
        return (
            <div>
                 <table id="stats" className="table table-striped"><tbody>
                    <tr><th>Name</th><th>Home Runs</th></tr>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td className="left"><a href={baseURL + item.player_id}>{item.name_display_first_last}</a></td>
                            <td className="center">{item.hr}</td>
                        </tr>
                    ))}
                </tbody></table>
            </div>
        );




    }
}
export default Data;