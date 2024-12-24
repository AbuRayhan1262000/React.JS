import React, { Component } from "react";

class Card extends Component{
    render(){
        return(
            <h2>Abu Rayhan {this.props.age}</h2>
        )
    }
}
export default Card;