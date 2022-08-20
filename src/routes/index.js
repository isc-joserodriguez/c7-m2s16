import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PeliculasPage from "../pages/PeliculasPage";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/peliculas" element={<PeliculasPage />} />
    </Routes>
  );
};

export default RoutesComponent;
