import './HR.css';
import React from "react";
import { getByDisplayValue } from '@testing-library/dom';
import { getAllByPlaceholderText } from '@testing-library/dom';
class PlayerDetail extends React.Component {

    constructor(props) {
        console.log(props);
        super(props);
        const { id } = props.match.params;
        console.log("ID: " + id);
        this.state = {
            error: null,
            isLoaded: false,
            item: {},
            player_id: id
        };
    }



componentDidMount() {
    console.log(this.state.player_id);
    fetch("http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&player_id='" + this.state.player_id + "'")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    item: result.player_info.queryResults.row
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
}

render() {
    const { error, isLoaded, item } = this.state;
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        const d = new Date(item.pro_debut_date);
        const dateDebut = d.getMonth() + "/" + d.getDay() + "/" + d.getFullYear();
        return (
            <div className="player_detail"><div className="heading"><img alt="baseball" className="ball_icon" src="../logo192.png"/><h1>Player Details</h1></div>
                <div>
                <table id="stats">
                    <tr><td className="left">Name: </td><td className="left">{item.name_display_first_last}</td></tr>
                    <tr><td className="left">Team Name: </td><td className="left">{item.team_name}</td></tr>
                    <tr><td className="left">Primary Position: </td><td className="left">{item.primary_position_txt}</td></tr>
                    <tr><td className="left">MLB Debut: </td><td className="left">{dateDebut}</td></tr>
                    <tr><td className="left">College: </td><td className="left">{item.college}</td></tr>
                    <tr><td className="left">Birth Country: </td><td className="left">{item.birth_country}</td></tr>
                    <tr><td className="left">Birth City: </td><td className="left">{item.birth_city}</td></tr>
                    <tr><td className="left">Age: </td><td className="left">{item.age}</td></tr>
                    
                    
                    
                </table>
                </div>
            </div>
        );
    }
}

}

export default PlayerDetail;

