import React, { useState, useEffect } from "react";
import urls from "./url_config.json";

function Hits() {
    const baseURL = "/player_detail/"
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        //from url_config.json
        fetch(urls.leading_hitters)
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
        return (<div>Error: {error.message}</div>);
    } else if (!isLoaded) {
        return (<div>Loading...</div>);
    } else {
        return (
            <div className="wrapper">
                <div className="heading">
                    <div className="headwrap">
                        <img alt="baseball" className="ball_icon" src="logo192.png" /><h1>Leading Hitters</h1>
                    </div>
                </div>
                <table id="stats"><tbody>
                    <tr><th className="left">Name</th><th>Hits</th></tr>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td className="left"><a href={baseURL + item.player_id}>{item.name_display_first_last}</a></td><td className="center">{item.h}</td>
                        </tr>
                    ))}
                </tbody></table>
            </div>
        );

    }
}

export default Hits;