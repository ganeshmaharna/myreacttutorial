import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state={
            myfavcolor:"Green"
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({myfavcolor:"Yellow"});
        }, 2000);
    }
    componentDidUpdate(){
        // document.querySelector(".myseconddiv").innerHTML="The updated fav. color is"+this.state.myfavcolor;
        // document.write("Hello World");
    }
    
  render() {
    return (
      <> 
        <div className="firstdiv">My fav color is {this.state.myfavcolor}</div>
        <div className="seconddiv"></div>
      </>
    )
  }
}
