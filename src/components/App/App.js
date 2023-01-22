import "./App.css";
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cards from "./components/Cards/Cards.js";
// import ClickCard from "./components/ClickCard.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Principiante from "./components/Principiantes";
import { CardContext} from "./components/Context/CardContext";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./Context/CardContext";
import {db} from '../db/firebase.config.js';
import {collection,doc, getDocs} from "firebase/firestore";

function App() { 
  
    const { products } = useContext(GlobalContext);
    const [producto, setProducto] useState({});
    const [productos, setProductos] = useState([])
    const productosCollectionRef = collection(db, "productos");
    
   
  const getProductos = async () => {
    const data = await getDocs(productosCollectionRef)
    setProductos(data.docs.map(doc => ({...doc.data(), id: doc.id})))
  }
 
  const getProducto = async (id) => {
    const docRef = doc(db,'producto', id);
    const docSnap = await getDoc.(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
  } else{

  }

  useEffect (() =>{
    getProductos()
  },[])



  return (
    <div>
      <CardContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/equipos" element={<Cards/>} />
            <Route exact path="/comprar/:id" element={<ItemDetailContainer/>}/>
            <Route path="/categoria/:category" element={<Principiante />} />
            {/* <Route path="/comprar/:cardId" element={<ClickCard />} /> */}
          </Routes>
        </BrowserRouter>
      </CardContext>



    </div>
  );
}

export default App;