import React, { Component } from 'react';

class ClassLifecycle extends Component {
    constructor(props){
        console.log("Constructor is called")
        super(props)
        this.state={
            counter:0
        }
        this.increment=()=>this.setState({counter:this.state.counter+1});
        this.decrement=()=>this.setState({counter:this.state.counter-1});
    }
    componentDidMount(){
        console.log("componentDidMount is called");
    }
    shouldComponentUpdate(nextProps,nextState){
        return true;
    }
    render() {
        console.log("Render is called")
        return (
            <> 
                <button onClick={this.increment}>Incr</button>
                <button onClick={this.decrement}>Decr</button>
                <div>
                    Counter:{this.state.counter}
                </div>
            </>
           
        );
    }
    componentDidUpdate(prevProps,prevState,snapshot){
       console.log("Component did update called");
       console.log("------------------");
    }
    componentWillUnmount(){
        console.log("Component will unmount called");
        console.log("-------------------");
    }
}

export default ClassLifecycle;
