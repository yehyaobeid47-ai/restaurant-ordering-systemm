import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom"
import Home from './pages/home.js'
import Footer from './components/Footer.js'
import Menu from './pages/menu.js'
import FoodCategory from "./components/FoodCategory.js";
import OrderPage from "./components/OrderPage.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" exact Component={Home}></Route>
      <Route path="/menu" exact Component={Menu}></Route>
      
      <Route path="/menu/:mainCategory/:subCategory" element={<FoodCategory />} />
              <Route path="/order/:mainCategory/:subCategory/:itemName" element={<OrderPage />} />

        <Route path="/about" exact Component={About}></Route>
         <Route path="/contact" exact Component={Contact}></Route>
    </Routes>
    <Footer/>
    </Router>
   
  );
}

export default App;
