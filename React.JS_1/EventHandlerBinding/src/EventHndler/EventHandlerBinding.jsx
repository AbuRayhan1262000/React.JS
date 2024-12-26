
import React, {Component} from 'react'

export default class EventHandlerBinding extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      //this.HandleClick = this.HandleClick.bind(this)
    }
        /*
        //arrow function  use korle bind() dorker nai
         HandleClick=()=>{
            this.setState({
                count:this.state.count +1
            }

            )
        } */

            //normal function e binding korte hoi noito undefined ase
            HandleClick(){
                this.setState({
                    count:this.state.count +1
                })
            }
    render(){
        return(
           <div>
                <h3>Count :{this.state.count}</h3>
                <button onClick={this.HandleClick.bind(this)}>Increment</button>
           </div>
        )
    }
}
