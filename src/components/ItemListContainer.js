import "./ItemListContainer.css";
import  {Link} from 'react-router-dom'

export default function ItemListContainer() {
  return (
    <div className="ItemList">
      <Link to="/equipos">
        <button>Bienvenidos</button>
      </Link>

    </div>

  
    

  );
}