import './App.css';
import Navbar from './component/navbar';
import Location from './component/locations';
import About from './component/about';
import Contact from './component/contact';
import Homepage from './pages/home';
import Detailpage from './pages/details'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import ProductModule from './modules/productmodule';
import Cart from './component/cart'
import Footer from './component/footer';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <ProductModule>
    <Routes>
      
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<Detailpage />} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<Contact/>} />
        <Route path="/locations" element={<Location/>} />
				<Route path="/cart" element={<Cart/>} />		
    </Routes>
    </ProductModule>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
