/* import { Otro, Card } from "react-bootstrap"; */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Store } from "react-notifications-component";

const List = ({ peliculas, updatePelicula, editModeOn, eliminarPelicula }) => {
  const onClicked = (pelicula) => {
    updatePelicula(pelicula);
    editModeOn();
  };
  const onDelete = (id) => {
    if (!window.confirm("Seguro que quiere eliminar")) {
      return;
    }
    eliminarPelicula(id);
    Store.addNotification({
      title: "Éxito!",
      message: "Se eliminó la pelicula correctamente!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
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
