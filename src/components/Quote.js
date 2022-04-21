import axios from "axios";
import React, { Component } from "react";


class Quote extends Component {
    constructor() {
        super();
        this.state ={
            quotes: ''
        }
    }
    componentDidMount() {
        this.getQuote();
    }
   getQuote = async () => {
    axios.get('https://api.kanye.rest/')
    .then(response => {
        this.setState({
            quotes: response.data.quote
        })
    })
    }
    render(){
        return(
            <div>
                <div className="quote">{this.state.quotes} </div>
                <button className="button" onClick={this.getQuote}> Ye Sayz </button>
            </div>
        )
    }
   
}
   
export default Quote
