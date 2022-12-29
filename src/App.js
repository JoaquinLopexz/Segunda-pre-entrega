import "./App.css";
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer'
import Cards from "./components/Cards.js";
import ClickCard from "./components/ClickCard.js";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { equipos } from './components/data.js';
import Principiantes from "./components/Principiante";



function App() {
const [productos, setProductos] = useState([])

useEffect(() => {
  setProductos([...equipos])
}, [equipos]);

 
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'}/> } />
          <Route path="/equipos" element={<Cards items={productos}/>} />
          <Route path="/Principiantes" element={<Principiantes items={productos} />} />
          <Route path="/Intermedio" element={<Cards items={productos}/>} />
          <Route path="/Profesional" element={<Cards items={productos}/>} />
          <Route 
            path="/comprar/:cardId" 
            element={<ClickCard items={productos} />} 
          /> 
        </Routes>
    </BrowserRouter>  
      </div>
  );  
}
   
export default App;