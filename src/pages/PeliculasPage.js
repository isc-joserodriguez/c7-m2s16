import { useState, useEffect } from "react";
import {
  doc,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebase";

import List from "../components/List/List";
import Form from "../components/Form/Form";

const PeliculasPage = () => {
  const [pelicula, setPelicula] = useState({
    id: "",
    name: "",
    year: "",
  });
  const [peliculas, setPeliculas] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const REF_COLLECTION = collection(db, "peliculas");
  const getAllPeliculas = async () => {
    const snapshot = await getDocs(REF_COLLECTION);
    snapshot.docs.forEach((pelicula) => console.log(pelicula.data()));
  };

  const editModeOn = () => setEditMode(true);

  const resetPelicula = () => {
    setPelicula({
      id: "",
      name: "",
      year: "",
    });
    setEditMode(false);
  };

  const updatePelicula = (pelicula) => setPelicula(pelicula);

  const listenPeliculas = () => {
    onSnapshot(REF_COLLECTION, (snapshot) => {
      const peliculas = [];
      snapshot.docs.forEach((pelicula) => {
        peliculas.push({
          ...pelicula.data(),
          id: pelicula?.id,
        });
      });
      setPeliculas(peliculas);
      alert("Se actualizaron las películas correctamente");
    });
  };

  const agregarPelicula = (pelicula) => addDoc(REF_COLLECTION, pelicula);

  const editarPelicula = (pelicula) =>
    setDoc(doc(db, "peliculas", pelicula.id), {
      name: pelicula.name,
      year: pelicula.year,
    });

  const eliminarPelicula = (id) => {
    deleteDoc(doc(db, "peliculas", id));
    resetPelicula();
  };

  useEffect(() => {
    listenPeliculas();
  }, []);

  return (
    <>
      <Form
        agregarPelicula={agregarPelicula}
        pelicula={pelicula}
        updatePelicula={updatePelicula}
        resetPelicula={resetPelicula}
        editarPelicula={editarPelicula}
        editMode={editMode}
      />
      <List
        peliculas={peliculas}
        updatePelicula={updatePelicula}
        editModeOn={editModeOn}
        eliminarPelicula={eliminarPelicula}
      />
    </>
  );
};

export default PeliculasPage;
