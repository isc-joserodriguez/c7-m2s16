import { useState, useEffect } from "react";
import {
  doc,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase";

import List from "../components/List/List";
import Form from "../components/Form/Form";

const PeliculasPage = () => {
  const [peliculas, setPeliculas] = useState([]);
  const REF_COLLECTION = collection(db, "peliculas");
  const getAllPeliculas = async () => {
    const snapshot = await getDocs(REF_COLLECTION);
    snapshot.docs.forEach((pelicula) => console.log(pelicula.data()));
  };

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
    });
  };

  const agregarPelicula = async (pelicula) => addDoc(REF_COLLECTION, pelicula);

  const editarPelicula = async (id, pelicula) =>
    setDoc(doc(db, "peliculas", id), pelicula);

  useEffect(() => {
    listenPeliculas();
  }, []);

  return (
    <>
      <Form agregarPelicula={agregarPelicula} />
      <List peliculas={peliculas} editarPelicula={editarPelicula} />
    </>
  );
};

export default PeliculasPage;
