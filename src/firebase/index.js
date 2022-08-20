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
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

export const db = getFirestore();
