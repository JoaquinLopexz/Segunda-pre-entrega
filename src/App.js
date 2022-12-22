import "./App.css";
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer'
import Cards from "./components/Cards.js";
import ClickCard from "./components/ClickCard.js";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import items from './components/data.js';

function App() {
const [equipos, setEquipos] = useState([])

useEffect((items) => {
  items.forEach(item => {
    setEquipos([...equipos, item]);
  });
});

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <ItemListContainer /> 
        <Routes>
          <Route path="/" elementName={<p>Bienvenido a Nova Music</p>} />
          <Route path="/equipos" element={<Cards items={equipos}/>} />
          <Route 
            path="comprar/:cardid" 
            element={<ClickCard items={equipos} />} /> 
        </Routes>
      </div>
    </BrowserRouter>  
  );
}
   
export default App;