import React from "react";
import './navbar.css'
import Icon from "./icon/Icon";
import Front from "./Front.jsx/Front";
import Ticket from "./Ticket/Ticket";

const Navbar = () => {
    return(
        <div className="contain">
               <div className="navbar navbar-expand-lg nav-bg">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="./redbus logo.jpeg"></a>
                      <img src={red} alt="" class="redBus"/> */}
                      <Icon/>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li> */}
                        <Front/>
                        {/* <li className="nav-item">
                        <a className="nav-link" href="#">Tickets</a>
                        </li> */}
                        <Ticket/>
                        <li className="nav-item">
                        <a className="nav-link" href="">Contacts</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="# offerdiv">OFFERS</a></li>
                            <li><a className="dropdown-item" href="#goverment">government</a></li>
                            <li><hr className="dropdown-divider"/></li>
                        </ul>
                        </li> */}
                        <li className="nav-item">
                        <a className="nav-link" href="#">logout</a>
                        </li>

                    </ul>
                    </div>
                </div>
                </div>

        </div>
    )
}

export default  Navbar;