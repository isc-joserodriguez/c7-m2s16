/* import { Otro, Card } from "react-bootstrap"; */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const List = ({ peliculas, editarPelicula }) => {
  const onClicked = (id) => {
    const updatedPelicula = {
      name: prompt("Nombre de la pelicula"),
      year: prompt("Año"),
    };
    editarPelicula(id, updatedPelicula);
  };
  return peliculas.map((pelicula, key) => (
    <Card style={{ width: "15rem", display:"inline-block"}} key={key}>
      <Card.Body>
        <Card.Title>{pelicula.name}</Card.Title>
        <Card.Text>{pelicula.year}</Card.Text>
        <Button variant="warning" onClick={() => onClicked(pelicula.id)}>
          Editar
        </Button>
      </Card.Body>
    </Card>
  ));
};

export default List;
