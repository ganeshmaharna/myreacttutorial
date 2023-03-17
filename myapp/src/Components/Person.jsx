import React,{Component} from "react";
class Person extends Component{
    constructor(props){
        super(props);
        this.props=props;
        this.state={
            name:"Ganesh",
            age:"23",
        }
    }
    changeFunc() {
        this.setState({
            name:"Malay",
            age:"25",
        })
    }
    render(){
        return(
            <>
              {/* <h1>My name is {this.props.name}</h1> */}
              <h1>My name is {this.state.name} and age is {this.state.age}</h1> 
              <button onClick={()=>this.changeFunc()}>ClickMe</button>
            </>
        );
    }
}
export default Person;