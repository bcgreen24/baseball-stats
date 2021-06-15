import React, { useState, useEffect } from "react";
import urls from "./url_config.json";

var theresult = null;

function searchObj(obj, query) {
 
    for (var key in obj) {
      
        if (key == query) {
            theresult = obj[key];
            break;
        }
      
        var value = obj[key];
      
        if (typeof value === 'object'){
            searchObj(value, query);
        }
  
        if (typeof key === 'object'){
            searchObj(key, query);
        } 
    }
  
    return theresult;
}

function Stats(props) {
    const baseURL = "/player_detail/"
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {

        //from url_config.json
        fetch(urls.base_url + props.url)
            .then(res => res.json())
            .then(
                (result) => {
                    setError(null);
                    setIsLoaded(true);
                    setItems(searchObj(result, "row"));
                },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            )
    }, [props.url]);

    if (error) {
        return (<div className="status">Error: {error.message}</div>);
    } else if (!isLoaded) {
        return (<div className="status"><img className='tiny_image' alt='loading spinner' src='./1485.gif' /></div>);
    } else {
        return (
            <div>
                <table id="stats" className="table table-striped"><tbody>
                    <tr><th>Name</th><th>{props.component_name}</th></tr>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td className="left"><a href={baseURL + item.player_id}>{item[props.data_fields[0]]}</a></td>
                            <td className="center">{item[props.data_fields[1]]}</td>

                        </tr>
                    ))}
                </tbody></table>
            </div>
        );
    }
}

export default Stats;