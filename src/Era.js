import './HR.css';
import React from "react";

class Era extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://lookup-service-prod.mlb.com/json/named.leader_pitching_repeater.bam?sport_code='mlb'&results=10&game_type='R'&season='2021'&sort_column='era'&leader_pitching_repeater.col_in=era,name_display_first_last")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.leader_pitching_repeater.leader_pitching_mux.queryResults.row
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
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="wrapper"><div className="heading"><img class="ball_icon" src="logo192.png"/><h1>Pitching - ERA</h1></div>
                    <table id="stats"><tbody>
                        <tr><th className="left">Name</th><th>ERA</th></tr>
                        {items.map(item => (
                            <tr>
                                <td className="left">{item.name_display_first_last}</td><td className="center">{item.era}</td>
                            </tr>
                        ))}
                    </tbody></table>
                </div>
            );
        }
    }
}

export default Era;