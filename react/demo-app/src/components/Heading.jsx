// import React from "react";
import React,{Component} from "react";

class Heading extends Component{

    constructor(props)
    {
        super(props)
        
    }
    render() { 
        return(
            <div>
                <h1>welcome {this.props.marks}</h1>
            </div>
        )
    }
}

export default Heading ;