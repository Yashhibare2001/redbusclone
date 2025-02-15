import React from "react";
import './passinfo.css';
import { useNavigate } from "react-router-dom";

const Passinfo = () => {
    const navigate = useNavigate(); // Hook for navigation
    
    return (
        <div>
            <div className="container">
                <h1>Bus Ticket Booking</h1>
                <div className="form-container">
                    <form action="#" method="post">
                        <div className="content">
                            <h3>Personal Details</h3>
                            
                            <label>First Name: </label>
                            <input 
                                type="text" 
                                placeholder="Enter your first name" 
                                name="firstName"     
                            />
                            <br />

                            <label>Last Name: </label>
                            <input 
                                type="text" 
                                placeholder="Enter your last name" 
                                name="lastName" 
                            />
                            <br />

                            <label>Date of Birth: </label>
                            <input 
                                type="date" 
                                name="dob" 
                            />
                            <br />

                            <label>Gender: </label>
                            <div className="gender-options">
                                <input 
                                    type="radio" 
                                    id="male" 
                                    name="gender" 
                                    value="male" 
                                    required 
                                />
                                <label htmlFor="male">Male</label>
                                
                                <input 
                                    type="radio" 
                                    id="female" 
                                    name="gender" 
                                    value="female" 
                                    required 
                                />
                                <label htmlFor="female">Female</label>
                            </div>
                            <br />
                        </div>

                        <div className="content">
                            <h3>Travel Details</h3>

                            <label>From: </label>
                            <input 
                                type="text" 
                                placeholder="Enter your starting location" 
                                name="from" 
                                required 
                            />
                            <br />

                            <label>To: </label>
                            <input 
                                type="text" 
                                placeholder="Enter your destination" 
                                name="to" 
                                required 
                            />
                            <br />

                            <label>Date of Travel: </label>
                            <input 
                                type="date" 
                                name="travelDate" 
                                required 
                            />
                            <br />

                            <label>Number of Passengers: </label>
                            <input 
                                type="number" 
                                name="passengerCount" 
                                min="1" 
                                placeholder="Enter number of passengers" 
                                required 
                            />
                            <br />
                        </div>

                        <div className="content">
                            <h3>Contact Information</h3>
                            
                            <label>Mobile Number: </label>
                            <input 
                                type="tel" 
                                placeholder="Enter your mobile number" 
                                name="mobile" 
                                required 
                            />
                            <br />

                            <label>Email Address: </label>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                name="email" 
                            />
                            <br />
                        </div>

                        <button type="submit">Book Ticket</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Passinfo;
