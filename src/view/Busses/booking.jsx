import React, { Component } from "react";
import Busbooking from "./Busbooking";
import data_josn from '../Home/database.json';

//"React" : is a default import,Default imports are exported with "export default  <classname>". there is only one default export.
/*"{} : is used for a named import.Member imports that are exported with 'export <function/props/class>'
there can be multiple membeeds <exports className=""></exports>*/   



class booking extends Component{
    constructor(){
        super();
        this.state ={
            JSON : data_josn
        }
    }
    render(){
        return(
            <div>

            <Busbooking buslist={this.state.JSON}/>{/*pass data from .json file to Jullychild component props */}
            
            </div>
        )
    }

}
export default booking;



