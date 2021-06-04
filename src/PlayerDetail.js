import './HR.css';
import React from "react";
import urls from "./url_config.json";

class PlayerDetail extends React.Component {

    constructor(props) {
        super(props);
        const { id } = props.match.params;
        this.state = {
            error: null,
            isLoaded: false,
            item: {},
            player_id: id
        };
    }

componentDidMount() {
    fetch(urls.player_detail_base + this.state.player_id + "'")
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
                    <tbody>
                    <tr><td className="left">Name: </td><td className="left">{item.name_display_first_last}</td></tr>
                    <tr><td className="left">Nickname: </td><td className="left">{item.name_nick}</td></tr>
                    <tr><td className="left">Team Name: </td><td className="left">{item.team_name}</td></tr>
                    <tr><td className="left">Primary Position: </td><td className="left">{item.primary_position_txt}</td></tr>
                    <tr><td className="left">MLB Debut: </td><td className="left">{dateDebut}</td></tr>
                    <tr><td className="left">College: </td><td className="left">{item.college}</td></tr>
                    <tr><td className="left">Birth Country: </td><td className="left">{item.birth_country}</td></tr>
                    <tr><td className="left">Birth City: </td><td className="left">{item.birth_city}</td></tr>
                    <tr><td className="left">Age: </td><td className="left">{item.age}</td></tr>
                    </tbody>
                    
                    
                </table>
                </div>
            </div>
        );
    }
}
// name_nick
}

export default PlayerDetail;

