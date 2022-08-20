import { Container } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RoutesComponent from "./routes";

function App() {
  return (
    <>
      <Header />
      <Container>
        <RoutesComponent />
      </Container>
      <Footer />
    </>
  );
}

export default App;
