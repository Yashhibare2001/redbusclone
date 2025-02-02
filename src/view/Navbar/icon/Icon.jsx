import React from "react";
import red from '../redbus logo.jpeg';

import './icon.css';
import { Link } from "react-router-dom";

const Icon = () => {
    return(
        <div>
             <Link to="/"><img src={red} alt="" class="redBus"/></Link>
        </div>
    )
}
export default Icon;