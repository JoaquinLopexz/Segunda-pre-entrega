import Cards from './Card';
import "./ItemListContainer.css";


export default function ItemListContainer(props) {
  return (
    <div className="ItemList">
      <h1>{props.greeting}</h1> 
      <Cards />
    </div>

  
    

  );
}