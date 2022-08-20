import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const FormComponent = ({ agregarPelicula }) => {
  /**
   * 1.- onChange
   * 2.- FormData
   */

  /* 
  const [newPelicula, setNewPelicula] = useState({
    name: "",
    year: "",
  });

  const onChanged = (event) => {
    setNewPelicula({
      ...newPelicula,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmited = (event) => {
    event.preventDefault();
    console.log("Guardar", newPelicula);
  }; */

  const onSubmited = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const pelicula = Object.fromEntries(formData);
    agregarPelicula(pelicula);
  };

  return (
    <Form onSubmit={onSubmited}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>año</Form.Label>
        <Form.Control type="number" placeholder="Año" name="year" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
};

export default FormComponent;
