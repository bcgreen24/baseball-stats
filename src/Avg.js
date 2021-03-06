import React, { useState, useEffect } from "react";
import urls from "./url_config.json";


function Avg() {
    const baseURL = "/player_detail/"
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        //from url_config.json
        fetch(urls.base_url + urls.avgs)
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
        return (<div className="status"><img className='tiny_image' alt='baseball' src='./1485.gif'/></div>);
    } else {
        return (
            <div>
                <table id="stats" className="table table-striped"><tbody>
                    <tr><th>Name</th><th>Avg</th></tr>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td className="left">
                                <a href={baseURL + item.player_id}>{item.name_display_first_last}</a>
                            </td>
                            <td className="center">
                                {item.avg}
                            </td>
                        </tr>
                    ))}
                </tbody></table>
            </div>
        );

    }
}

export default Avg;