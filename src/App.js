// import logo from './assets/logo.svg';
import './App.css';
import { Route,  BrowserRouter as Router, Routes , Link} from 'react-router-dom';
import Navbar from './view/Navbar/Navbar';
import Home from './view/Home/Home';
import Passinfo from './view/Pass_Info/Passinfo';
import Buses from './view/Busses/Buses';




function App() {
  return (
    <div>
      
     {/* <img src={logo}/> */}
    <Navbar/>
    {/* <Home/>  */}
    {/* <Buses/> */}
    {/* <Passinfo/>  */}

    <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<Buses/>} />
              <Route exact path="./view/Navbar/Navbar" element={<Home/>} />
              {/*dynamic route placeholder ":id" replaced by the value in url */}
              <Route exact path="/Product" element={<Passinfo/>} />
              {/* <Route exact path="/Product/:id" element={<TempComp/>} /> */}
              {/* <Route exact path="*" element={<Notfound/>} /> */}

            </Routes>
          </div>
        </Router>
    
    
    </div>
  );
}

export default App;
