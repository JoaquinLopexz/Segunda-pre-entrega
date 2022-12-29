import "./App.css";
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer'
import Cards from "./components/Cards.js";
import ClickCard from "./components/ClickCard.js";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { equipos } from './components/data.js';

function App() {
const [productos, setProductos] = useState([])

useEffect(() => {
  setProductos([...equipos])
}, [equipos]);

  console.log("productos: ", productos)
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <ItemListContainer greeting={'Bienvenidos'}/> 
        <Routes>
          <Route path="/" elementName={<p>Bienvenido a Nova Music</p>} />
          <Route path="/equipos" element={<Cards items={productos}/>} />
          <Route 
            path="/comprar/:cardId" 
            element={<ClickCard items={productos} />} 
          /> 
        </Routes>
      </div>
    </BrowserRouter>  
  );  
}
   
export default App;