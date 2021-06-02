import './HR.css';
import React from "react";

class HR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://lookup-service-prod.mlb.com/json/named.leader_hitting_repeater.bam?sport_code=%27mlb%27&results=10&game_type=%27R%27&season=%272021%27&sort_column=%27hr%27&leader_hitting_repeater.col_in=hr,name_display_first_last,player_id")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.leader_hitting_repeater.leader_hitting_mux.queryResults.row
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

    handlePlayerID(e){
        e.preventDefault();
        for(const prop in e.target){
            console.log(prop);
        }
        console.log(e.target.href)
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="wrapper"><div className="heading"><img class="ball_icon" src="logo192.png"/><h1>HR Leaders</h1></div>
                    <table id="stats"><tbody>
                        <tr><th className="left">Name</th><th>Home Runs</th></tr>
                        {items.map(item => (
                            <tr>
                                <td className="left"><a href={item.player_id} onClick={this.handlePlayerID}>{item.name_display_first_last}</a></td><td className="center">{item.hr}</td>
                            </tr>
                        ))}
                    </tbody></table>
                </div>
            );
        }
    }
}

export default HR;