import './HR.css';
import React from "react";
import urls from "./url_config.json";

class HR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            player_id: null
        };
    }

    //<Route path="/dashboard" component={Dashboard} />//

    componentDidMount() {
        fetch(urls.leading_hitters)
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
    }

    render() {
        const { error, isLoaded, items } = this.state;
        const baseURL = "/player_detail/"
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="wrapper"><div className="heading"><img alt="baseball" className="ball_icon" src="logo192.png"/><h1>HR Leaders</h1></div>
                    <table id="stats"><tbody>
                        <tr><th className="left">Name</th><th>Home Runs</th></tr>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td className="left"><a href={baseURL + item.player_id}>{item.name_display_first_last}</a></td><td className="center">{item.hr}</td>
                            </tr>
                        ))}
                    </tbody></table>
                </div>
            );
        }
    }
}

export default HR;