import { Button, Form } from "react-bootstrap";
import { Store } from "react-notifications-component";

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
      Store.addNotification({
        title: "Error",
        message: "Se requieren datos...",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      return;
    }
    if (editMode) {
      editarPelicula(pelicula);
      Store.addNotification({
        title: "Éxito!",
        message: "Se editó la pelicula correctamente!",
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
    } else {
      agregarPelicula(pelicula);
      Store.addNotification({
        title: "Éxito!",
        message: "Se agregó la pelicula correctamente!",
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
