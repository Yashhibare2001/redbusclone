import React from "react";
import { useParams } from "react-router-dom";

const Customer = () => {
    const params = useParams();
    return (
        <div>
           <a href="./Buses">Buses</a>
        </div>
    )
};
export default Customer;