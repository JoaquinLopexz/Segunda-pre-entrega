import Card from "./Card";

function Cards({items}) {
  return (
    <div className="cards-container">
      {items.map((equipo) => (
        <Card key={equipo.id} equipos={equipo} />
      ))}
    </div>
  );
}

export default Cards;