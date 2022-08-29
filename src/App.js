import { Container } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RoutesComponent from "./routes";
import { ReactNotifications } from "react-notifications-component";

function App() {
  return (
    <>
      <ReactNotifications />
      <Header />
      <Container>
        <RoutesComponent />
      </Container>
      <Footer />
    </>
  );
}

export default App;
