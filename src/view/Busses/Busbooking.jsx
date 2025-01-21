import React from "react";

const Busbooking = (buslist) => {         //functional component that accepts the products data passed to it

    //custom method, called from the view in the Render()  below
    const renderList = ({ buslist }) => {    //temp argument that receives the data passed to this component by Products Component

        if (buslist) {                       //if data exists
            return buslist.map((data) => { //map() function iteratively executes once for each record, in the json data
                return (
                    <div key={data.BusID} className="card col-md-3">
                        <div className="row">
                            <div className="card-img">
                                <img className="card-img-top" src={data.img} alt={data.name} />
                            </div>
                            <hr />
                            <span className="topTemp">{data.name}</span>
                        </div>
                        <div className="card-body">
                            <span className="max">Rs. {data.price}</span>
                            <h4 className="card-title">{data.type}</h4>
                            <div className="card-text">
                                <p className="day"> {data.price}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    return (
        <div className="container">
            <div className="row">
                {renderList(buslist)}  {/* Calls the above custom function to render the data in the view */}
            </div>
        </div>
    )
}
export default Busbooking;





