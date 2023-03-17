import React, {PureComponent } from 'react';
// import React, {Component} from 'react';
class UserCount extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            userCount:10
        }
        this.increment=()=>this.setState({userCount:this.state.userCount+1})
    }
    // shouldComponentUpdate(newProps,newState){
    //     if(newState.userCount!==this.state.userCount){
    //         return true;
    //     }
    //     return false;
    // }

    render() {
        console.log("UserCount Component rendered");
        return (
            <>
             <h1>Regular Component</h1> 
             <div> 
                We have fetched {this.state.userCount}
             </div> 
             <button onClick={this.increment}>Incr</button>              
            </>
        );
    }
}

export default UserCount;
