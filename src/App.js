import "./App.css";
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer'
import Cards from "./components/Cards.js";
import ClickCard from "./components/ClickCard.js";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { equipos } from './components/data.js';
import Principiante from "./components/Principiante";



function App() {
const [productos, setProductos] = useState([])

useEffect(() => {
  setProductos([...equipos])
}, []);

 
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer   /> } />
          <Route path="/equipos" element={<Cards items={productos}/>} />
          <Route path="/categoria/:category" element={<Principiante productos={productos} />} />
          <Route path="/comprar/:cardId"  element={<ClickCard items={productos} />} 
          /> 
        </Routes>
    </BrowserRouter>  
      </div>
  );  
}
   
export default App;