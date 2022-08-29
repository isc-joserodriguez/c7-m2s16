/* import { Otro, Card } from "react-bootstrap"; */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const List = ({ peliculas, updatePelicula, editModeOn, eliminarPelicula }) => {
  const onClicked = (pelicula) => {
    updatePelicula(pelicula);
    editModeOn();
  };
  const onDelete = (id) => {
    eliminarPelicula(id);
    alert("Se eliminó correctamente");
  };
  return peliculas.map((pelicula, key) => (
    <Card style={{ width: "15rem", display: "inline-block" }} key={key}>
      <Card.Body>
        <Card.Title>{pelicula.name}</Card.Title>
        <Card.Text>{pelicula.year}</Card.Text>
        <Button variant="warning" onClick={() => onClicked(pelicula)}>
          Editar
        </Button>
        <Button variant="danger" onClick={() => onDelete(pelicula.id)}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  ));
};

/* 
<div className="card" style={{ width: "15rem", display: "inline-block" }}>
      <div className="card-body">
        <div className="card-title h5">nuevo</div>
        <p className="card-text">1233</p>
        <button type="button" className="btn btn-warning">
          Editar
        </button>
      </div>
    </div>
*/

export default List;
