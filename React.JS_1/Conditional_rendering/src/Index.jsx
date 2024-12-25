import React, { Component } from 'react'
import HomePage from './Conditional_Rendering/HomePage';
import LoginPage from './Conditional_Rendering/LoginPage';
export default class Index extends Component {
    
    //constructor
   constructor(props) {
     super(props)
   
     this.state = {
        isLoggedIn : true
     }
   }
   
    render() {
       // conditional rendering
        //if-else condition
    //   if(this.state.isLoggedIn){
    //         return <HomePage />
    //     }
    //     else{
    //         return <LoginPage />
    //     } 






            //element variable
          /*   const {isLoggedIn} = this.state
            let element ;
            if(isLoggedIn){
             element = <LoginPage />
             }else{
             element = <HomePage/>
               }
               return(
                    <>
                  {element}
                    </>
                    ) */





                    //ternary operator
    /*      const {isLoggedIn} = this.state
         let element = isLoggedIn? <LoginPage/>:<HomePage/>       
    return(
        <>
          {element}
        </>
    ) */

                //short circuiting operator
        const {isLoggedIn} = this.state
        return(
            <>
            {isLoggedIn && <HomePage />}
            </>
        )
 
  }
}
