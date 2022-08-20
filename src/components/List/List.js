import { Button } from "react-bootstrap";

const List = ({ peliculas, editarPelicula }) => {
  const onClicked = (id) => {
    const updatedPelicula = {
      name: prompt("Nombre de la pelicula"),
      year: prompt("Año"),
    };
    editarPelicula(id, updatedPelicula);
  };
  return peliculas.map((pelicula, key) => (
    <li key={key}>
      {pelicula.name} - {pelicula.year}
      <Button variant="warning" onClick={() => onClicked(pelicula.id)}>
        Editar
      </Button>
    </li>
  ));
};

export default List;
