import React from "react";

import './buses.css';
import Busbk from "./Busbk";



const Buses = () => {
    return(
          <div>
            {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <img src="./redbus logo.jpeg" alt="" class="redBus"/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="# offerdiv">OFFERS</a></li>
                  <li><a class="dropdown-item" href="#goverment">government</a></li>
                  <li><hr class="dropdown-divider"/></li>
                </ul>
              </li>
  
            </ul>
          </div>
        </div>
      </nav> */}
             

   <Busbk/>
  {/* //  <div>
  //   <div class="common">
  //       <div class="buscard">
  //           <div class="card">
  //               <img src="https://holidayshunt.com/wp-content/uploads/2023/06/pune.png" class="card-img-top" alt="Pune"/>
  //               <div class="card-body">
  //                 <h5 class="card-title">Card title</h5>
  //                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //                 <a href="#" class="btn btn-primary">Go somewhere</a>
  //               </div>
  //             </div>
  //       </div>
    
  //       <div class="buscard">
  //           <div class="card">
  //               <img src="https://i.pinimg.com/736x/b3/55/98/b35598f744056a00ecbd1048092f42a4.jpg" class="card-img-top" alt="Mumbai"/>
  //               <div class="card-body">
  //                 <h5 class="card-title">Card title</h5>
  //                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //                 <a href="#" class="btn btn-primary">Go somewhere</a>
  //               </div>
  //             </div>
  //       </div>

  //       <div class="buscard">
  //           <div class="card">
  //               <img src="https://i.ytimg.com/vi/iVEpa462iqA/maxresdefault.jpg" class="card-img-top" alt="Nagpur"/>
  //               <div class="card-body">
  //                 <h5 class="card-title">Card title</h5>
  //                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //                 <a href="#" class="btn btn-primary">Go somewhere</a>
  //               </div>
  //             </div>
  //       </div>
       
  //      </div>



  //      <div class="common">
  //       <div class="buscard">
  //           <div class="card">
  //               <img src="https://images.freeimages.com/images/previews/0d3/goa-beach-1-1604394.jpg" class="card-img-top" alt="Goa"/>
  //               <div class="card-body">
  //                 <h5 class="card-title">Card title</h5>
  //                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //                 <a href="#" class="btn btn-primary">Go somewhere</a>
  //               </div>
  //             </div>
  //       </div>
    
  //       <div class="buscard">
  //           <div class="card">
  //               <img src="https://wallpapercave.com/wp/wp10257499.jpg" class="card-img-top" alt="hyd"/>
  //               <div class="card-body">
  //                 <h5 class="card-title">Card title</h5>
  //                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //                 <a href="#" class="btn btn-primary">Go somewhere</a>
  //               </div>
  //             </div>
  //       </div>

  //       <div class="buscard">
  //           <div class="card">
  //               <img src="https://www.tripsavvy.com/thmb/pAlZ4kx0tM9HFLmgkYbqMlfxaok=/2116x1417/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-846359134-5b515328c9e77c003738e40c.jpg" class="card-img-top" alt="delhi"/>
  //               <div class="card-body">
  //                 <h5 class="card-title">Card title</h5>
  //                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //                 <a href="#" class="btn btn-primary">Go somewhere</a>
  //               </div>
  //             </div>
  //       </div>
       
  //      </div>

  //      <div class="common">
  //       <div class="buscard">
  //           <div class="card">
  //               <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/03/02101931/Featured-Image.jpeg" class="card-img-top" alt="benguluru"/>
  //               <div class="card-body">
  //                 <h5 class="card-title">Card title</h5>
  //                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //                 <a href="#" class="btn btn-primary">Go somewhere</a>
  //               </div>
  //             </div>
  //       </div>
    
  //       <div class="buscard">
  //           <div class="card">
  //               <img src="https://wallpapercave.com/wp/wp2678124.jpg" class="card-img-top" alt="j&k"/>
  //               <div class="card-body">
  //                 <h5 class="card-title">Card title</h5>
  //                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //                 <a href="#" class="btn btn-primary">Go somewhere</a>
  //               </div>
  //             </div>
  //       </div>

  //       <div class="buscard">
  //           <div class="card">
  //               <img src="https://c4.wallpaperflare.com/wallpaper/801/130/433/kolkata-howrah-bridge-wallpaper-preview.jpg" class="card-img-top" alt="kolkata"/>
  //               <div class="card-body">
  //                 <h5 class="card-title">Card title</h5>
  //                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //                 <a href="#" class="btn btn-primary">Go somewhere</a>
  //               </div>
  //             </div>
  //       </div>
       
  //      </div>
  //  </div> */}
          </div>

         )
}
export default Buses;

