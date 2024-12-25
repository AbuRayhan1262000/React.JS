import React, { Component } from 'react'

export default class EventHandler extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       changeValue :''
    }
  }
  
  handleOnChange = (e)=>{
       this.setState({
        changeValue : e.target.value
       })
       
  }
    render() {
        const {changeValue} = this.state
    return (
      <div>
        <input type="text"onChange={this.handleOnChange} />
        <p>{changeValue}</p>
      </div>
    )
  }
}
