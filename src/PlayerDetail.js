import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import urls from "./url_config.json";
import { Header } from '@primer/components'
import './milligram.css';

function PlayerDetail() {

    let { id } = useParams();
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [itemsHittingCareer, setCareerHittingItems] = useState([]);
    const [itemsPitchingCareer, setCareerPitchingItems] = useState([]);

    useEffect(() => {
        fetch(urls.base_url + urls.player_detail_base + id + "'")
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

    useEffect(() => {
        fetch(urls.base_url + urls.career_hitting + id + "'")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCareerHittingItems(result.sport_career_hitting.queryResults.row);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [id]);

    useEffect(() => {
        fetch(urls.base_url + urls.career_pitching + id + "'")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCareerPitchingItems(result.sport_career_pitching.queryResults.row);
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
            <div className="content_box">
                <Header>
                    <Header.Item><img alt="baseball" className="ball_icon" src="../logo192.png" /></Header.Item>
                    <Header.Item><a href='/'>HOME</a>&nbsp;/&nbsp;Player Detail</Header.Item>
                </Header>
                <div>
                    <table className="table table-condensed table-striped">
                        <tbody>
                            <tr><td className="text-end">Name: </td>
                                <td className="text-left">{items.name_display_first_last}</td></tr>
                            <tr><td className="text-end">Nickname: </td>
                                <td className="text-left">{items.name_nick}</td></tr>
                            <tr><td className="text-end">Team Name: </td>
                                <td className="text-left">{items.team_name}</td></tr>
                            <tr><td className="text-end">Primary Position: </td>
                                <td className="text-left">{items.primary_position_txt}</td></tr>
                            <tr><td className="text-end">MLB Debut: </td>
                                <td className="text-left">{getDate(items.pro_debut_date)}</td></tr>
                            <tr><td className="text-end">Career Avg: </td>
                                <td className="text-left">{itemsHittingCareer.avg}</td></tr>
                            <tr><td className="text-end">Career On Base %: </td>
                                <td className="text-left">{itemsHittingCareer.obp}</td></tr>
                            <tr><td className="text-end">Career Hits: </td>
                                <td className="text-left">{itemsHittingCareer.h}</td></tr>
                            <tr><td className="text-end">Career HRs: </td>
                                <td className="text-left">{itemsHittingCareer.hr}</td></tr>
                            <tr><td className="text-end">Career ERA: </td>
                                <td className="text-left">{itemsPitchingCareer != null ? itemsPitchingCareer.era : 'N/A'}</td></tr>
                            <tr><td className="text-end">Career Wins: </td>
                                <td className="text-left">{itemsPitchingCareer != null ? itemsPitchingCareer.w : 'N/A'}</td></tr>
                            <tr><td className="text-end">Career Losses: </td>
                            <td className="text-left">{itemsPitchingCareer != null ? itemsPitchingCareer.l : 'N/A'}</td></tr>
                            <tr><td className="text-end">College: </td>
                                <td className="text-left">{items.college ? items.college : 'N/A'}</td></tr>
                            <tr><td className="text-end">Birth Country: </td><
                                td className="text-left">{items.birth_country}</td></tr>
                            <tr><td className="text-end">Birth City: </td>
                                <td className="text-left">{items.birth_city}</td></tr>
                            <tr><td className="text-end">Age: </td>
                                <td className="text-left">{items.age}</td></tr>

                        </tbody>


                    </table>
                </div>
            </div>
        );
    }
}

function getDate(date) {
    let d = new Date(date);
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();

    return (curr_month + "/" + curr_date + "/" + curr_year);
}

export default PlayerDetail;

