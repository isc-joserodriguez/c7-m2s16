const List = ({ peliculas }) => {
  return peliculas.map((pelicula, key) => (
    <li key={key}>
      {pelicula.name} - {pelicula.year}
    </li>
  ));
};

export default List;
