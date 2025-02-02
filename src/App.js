// import logo from './assets/logo.svg';
import './App.css';
import { Route,  BrowserRouter as Router, Routes , Link} from 'react-router-dom';
import Navbar from './view/Navbar/Navbar';
import Icon from './view/Navbar/icon/Icon';

import Front from './view/Navbar/Front.jsx/Front';
import Home from './view/Home/Home';
import Busbk from './view/Busses/Busbk'






function App() {
  return (
    <div>
      
     {/* <img src={logo}/> */}
    {/* <Navbar/>
    <Home/>  */}
    {/* <Buses/> */}
    {/* <Passinfo/>  */} 

    <Router>
          <div>
            <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/Icon" element={<Icon/>} />
              <Route path="/Front" element={<Front/>} />
              <Route path="/Busbk" element={<Busbk/>} />
              {/* <Route path="/Busbk/Busbooking/Passinfo" element={<Passinfo/>} /> */}


              {/* <Route exact path="./view/Navbar/Navbar" element={<Home/>} /> */}
              {/*dynamic route placeholder ":id" replaced by the value in url */}
              {/* <Route exact path="/Product" element={<Passinfo/>} /> */}
              {/* <Route exact path="/Product/:id" element={<TempComp/>} /> */}
              {/* <Route exact path="*" element={<Notfound/>} /> */}

            </Routes>
          </div>
        </Router>
    
    
    </div>
  );
}

export default App;
