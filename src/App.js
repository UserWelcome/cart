
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import { Toaster } from "react-hot-toast";

import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <Routes>
         < Route  path="/" element={ <Home/>} />
         <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Toaster/>
      </Router>
    </div>
  );
};

export default App;
