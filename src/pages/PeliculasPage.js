import { useState } from "react";
import { getDocs, collection, onSnapshot } from "firebase/firestore";

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
      snapshot.docs.forEach((pelicula) => console.log(pelicula.data()));
    });
  };

  listenPeliculas();

  return (
    <>
      <Form />
      <List peliculas={peliculas} />
    </>
  );
};

export default PeliculasPage;
