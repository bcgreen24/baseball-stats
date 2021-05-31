import React from "react";

class StatSelect extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        this.setState({value: e.target.value});
        console.log(e.target.value);
    }

    render(){
        return(
            <form>
                <select onChange={this.handleChange}>
                    <option value="HRs">HRs</option>
                    <option value="Hits">Hits</option>
                </select>
            </form>
        );
    }

}

export default StatSelect;