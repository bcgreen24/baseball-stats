import React, { useState, useEffect } from "react";
import urls from "./url_config.json";

function Era() {
    const baseURL = "/player_detail/"
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        //from url_config.json
        fetch(urls.base_url + urls.eras)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.leader_pitching_repeater.leader_pitching_mux.queryResults.row);
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
                    <tr><th>Name</th><th>ERA</th></tr>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td><a href={baseURL + item.player_id}>{item.name_display_first_last}</a></td>
                            <td className="center">{item.era}</td>
                        </tr>
                    ))}
                </tbody></table>
            </div>
        );
    }
}

export default Era;