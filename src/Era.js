import './HR.css';
import React, { useState, useEffect } from "react";
import urls from "./url_config.json";

function Era() {
    const baseURL = "/player_detail/"
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        //from url_config.json
        fetch(urls.eras)
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

    return (
        <div className="wrapper"><div className="heading"><img alt="baseball" className="ball_icon" src="logo192.png" /><h1>Pitching - ERA</h1></div>
            <table id="stats"><tbody>
                <tr><th className="left">Name</th><th>ERA</th></tr>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td className="left"><a href={baseURL + item.player_id}>{item.name_display_first_last}</a></td><td className="center">{item.era}</td>
                    </tr>
                ))}
            </tbody></table>
        </div>
    );
}

export default Era;