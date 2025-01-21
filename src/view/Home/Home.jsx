import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import train from './assest/train.webp';
import offer1 from './assest/offer tag 1.jpeg';
import offer2 from './assest/offer tag 2.jpeg';
import offer3 from './assest/offer tag 3.jpeg';
import barcode from './assest/barcode.jpg';
import pune from './assest/pune.webp';
import hyd from './assest/hydrabad.jpeg';
import nag from './assest/nsgpur.jpg';



const Home = () => {
    return(
        <div>
            <div id="div-bg">

                <div class="upperdiv">
                <h1 >India's No. 1 Online Bus Ticket Booking Site</h1>
                <form class="d-flex onerow" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <input class="form-control me-2" type="date" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" id="butn" type="submit" >Search</button>
                </form>



                <div class="offerdiv">
            
                <div >
                    <h2>OFFERS</h2>
                </div>
                
                <div >
                <div class="card" >
                    <img src={offer1} class="card-img-top" alt="offer tag 1"/>
                </div>

                <div class="card" >
                    <img src={offer2} class="card-img-top" alt="offer tag 2"/>
                </div>

                <div class="card" >
                    <img src={offer3} class="card-img-top" alt="offer tag 3"/>
                </div>
                </div>


                </div>
                </div>



                <div class="goverment">
                <div class="uppersection">
                <h1>Try your travels !!</h1>
                <form action="./landingpage.html">
                <button id="Click">VIEW</button>
                </form>
                </div>

                <div class="middlepart">
                <div class="middlesection">
                <img src={pune} alt="" class="src1"/>
                <h1>Vintage Thrown</h1>
                <div>
                <button>BOOK</button>
                </div>
                </div>

                <div class="middlesection">
                <img src={hyd} alt="" class="src1"/>
                <h1>Mustang Tours</h1>
                <div>
                <button>BOOK</button>
                </div>
                </div>

                <div class="middlesection">
                <img src={nag} alt="" class="src1"/>
                <h1>Rolls on wheels</h1>
                <div>
                <button>BOOK</button>
                </div>
                </div>
                </div>
                </div>



                <div class="upperbirth">
                <h1>NOW,GET <b>MORE THAN 
                <br/>JUST BUS </b>TICKETS WITH 
                <br/>REDBUS!</h1>
                <div class="rail">
                <img src={train} alt="rail img"/>
                </div>

                </div>



                <div class="appsetup">
                <h1 >ENJOY THE APP!</h1>

                <div  class="quickaccess">
                <img src={barcode} alt="barcode" class="barcode"/>
                </div>

                </div>




                <div class="scrollbar">
                <h1 >FAQs related to Bus Tickets Booking</h1>

                <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Can I track the location of my booked bus online?
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>Yes, you can track your bus online by using our bus tracking app feature called “Track My Bus”. This feature allows passengers and their families to track the live bus location. You may follow your bus on a map and use the information to plan your trip to the boarding point and to get off at the correct stop. Family and friends may also check the bus position to schedule pick-ups and ensure safety.</p>
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    What are the advantages of purchasing a bus ticket with redBus?
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    There are many advantages to purchasing online bus tickets with redBus. redBus is India’s most trusted bus ticket company, where you can book any type of private or government-owned bus. redBus allows you to find the different types of buses, choose the preferred bus seats, and find your nearest boarding and dropping points. You can also filter the buses based on timings, like morning, evening, etc. 
                    </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Why book bus tickets online on redBus?
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    Booking bus tickets online on redBus is increasingly becoming the preferred choice for travellers due to its numerous advantages over traditional methods. With redBus, customers can book their bus tickets effortlessly from the comfort of their homes, avoiding the inconvenience of standing in long lines at bus stations or travel agencies. Online bus booking offers the luxury of comparing different bus schedules and operators and presents various discount offers and exclusive deals, resulting in significant savings. Payment security is another notable feature of online booking, which ensures that your financial information is well-protected against fraud. Additionally, customers can pick their seats, providing a customized travel experience. Online bus booking platforms give real-time updates about any changes in the bus timetable, including delays or cancellations, enabling better planning. The convenience doesn't stop here; travellers can even compare onboard amenities like charging points or snacks, further enhancing the travel experience.
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                    What's New in Bus Booking on redBus?
                </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    Primo Bus Ticket: redBus has launched Primo bus services, where passengers can enjoy travelling in high-rated buses with best-in-class services. While looking for bus tickets on the desired route, customers can check the Primo tag to choose this excellent service. From hygiene standards to on-time service and comfort, passengers can benefit from the online bus booking experience from Primo buses.
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                    Do I need to create an account on the redBus site to book my bus ticket?
                </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    No, you don’t have to create an account on the redBus site to book your bus ticket. But it is advisable to make one to accelerate the process next time you want to book bus tickets. Also, redBus has many discounts and offers that you can easily access if you have an account with us.
                    </div>
                </div>
                </div>
                </div>

                </div>





                <div class="footer-div">
                <footer>
                <p>&copy; 2024 My Redbus Clone.</p>
                </footer>
                </div>

                        </div>
        </div>
    )
}

export default Home;