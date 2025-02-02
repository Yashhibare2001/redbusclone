import React from "react";
import { Link } from "react-router-dom";

const Ticket = ()=> {
    return(
        <div>
            <li className="nav-item">
                        <Link to="/Busbk" className="nav-link" href="#">Tickets</Link>
                        </li>
        </div>
    )

}
export default Ticket;