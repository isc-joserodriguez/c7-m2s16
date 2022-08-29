import { Button, Form } from "react-bootstrap";

const FormComponent = ({
  agregarPelicula,
  updatePelicula,
  pelicula,
  resetPelicula,
  editarPelicula,
  editMode,
}) => {
  /**
   * 1.- onChange
   * 2.- FormData
   */

  const onChanged = (event) => {
    updatePelicula({
      ...pelicula,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmited = (event) => {
    event.preventDefault();
    if (!pelicula.name || !pelicula.year) {
      alert("Se requieren datos...");
      return;
    }
    if (editMode) {
      editarPelicula(pelicula);
      alert("Se editó la pelicula");
    } else {
      agregarPelicula(pelicula);
      alert("Se agregó la pelicula");
    }
    resetPelicula();
  };

  /* const onSubmited = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const pelicula = Object.fromEntries(formData);
    agregarPelicula(pelicula);
  }; */

  return (
    <Form onSubmit={onSubmited}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre"
          name="name"
          value={pelicula.name}
          onChange={onChanged}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>año</Form.Label>
        <Form.Control
          type="number"
          placeholder="Año"
          name="year"
          value={pelicula.year}
          onChange={onChanged}
        />
      </Form.Group>
      <Button variant={editMode ? "primary" : "success"} type="submit">
        {editMode ? "Guardar" : "Agregar"}
      </Button>
      {editMode && (
        <Button variant="danger" onClick={resetPelicula}>
          Cancelar
        </Button>
      )}
    </Form>
  );
};

export default FormComponent;
