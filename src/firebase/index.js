/**
 * ! Consola de Firebase
 * 1.- Crear proyecto Firebase
 * 2.- Crear aplicación en Firebase
 * 3.- Activar el servicio(s) deseado
 * ! React
 * 4.- Instalar firbase con npm
 * 5.- Crear archivo de configuración (este archivo actual)
 * 6.- Importar servicios
 * 7.- Ejecutamos servicios y exportamos resultado
 * 8.- Usar servicios
 */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { get<Servicio> } from "firebase/<servicio>";

initializeApp({
  apiKey: "AIzaSyCc2AVShpSSriFZ4n2vmBzw_kfYxEK8nsE",
  authDomain: "peliculas-b0dde.firebaseapp.com",
  projectId: "peliculas-b0dde",
  storageBucket: "peliculas-b0dde.appspot.com",
  messagingSenderId: "632078679828",
  appId: "1:632078679828:web:2d5f63ad57e32f53c10c01",
});

export const db = getFirestore();
