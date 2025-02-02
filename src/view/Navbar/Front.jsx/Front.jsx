import React from "react";
import { Link } from "react-router-dom";

const Front = () => {
    return(
        <div>
            <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
        </div>
    )
}
export default Front;