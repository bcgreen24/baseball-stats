import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import urls from "./url_config.json";

function PlayerDetail() {
    let { id } = useParams();
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(urls.player_detail_base + id + "'")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.player_info.queryResults.row);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [id]);

    if (error) {
        return (<div>Error: {error.message}</div>);
    } else if (!isLoaded) {
        return (<div>Loading...</div>);
    } else {
        return (
            <div className="player_detail">
                <div className="heading">
                    <div className="headwrap">
                        <h1>Player Details</h1>
                    </div>
                </div>
                <div>
                    <table id="player_detail">
                        <tbody>
                            <tr><td className="left">Name: </td><td className="left">{items.name_display_first_last}</td></tr>
                            <tr><td className="left">Nickname: </td><td className="left">{items.name_nick}</td></tr>
                            <tr><td className="left">Team Name: </td><td className="left">{items.team_name}</td></tr>
                            <tr><td className="left">Primary Position: </td><td className="left">{items.primary_position_txt}</td></tr>
                            <tr><td className="left">MLB Debut: </td><td className="left">{items.dateDebut}</td></tr>
                            <tr><td className="left">College: </td><td className="left">{items.college}</td></tr>
                            <tr><td className="left">Birth Country: </td><td className="left">{items.birth_country}</td></tr>
                            <tr><td className="left">Birth City: </td><td className="left">{items.birth_city}</td></tr>
                            <tr><td className="left">Age: </td><td className="left">{items.age}</td></tr>
                        </tbody>


                    </table>
                </div>
            </div>
        );
    }

}
export default PlayerDetail;

