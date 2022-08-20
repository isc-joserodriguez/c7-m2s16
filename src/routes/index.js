import { Router, Route } from "react-router-dom";

const RoutesComponent = () => {
  return (
    <Router>
      <Route path="/" element={<HomePage />} />
      <Route path="/peliculas" element={<Peliculas />} />
    </Router>
  );
};

export default RoutesComponent;
