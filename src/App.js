import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import HomePage from "./components/HomePage";
import { Col, Container, Row } from "react-bootstrap";
import Album from "./components/Album";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <SideBar />
          </Col>
          <Col xs={12} md={9} className="offset-md-3 mainPage">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/album/:id" element={<Album />} />
            </Routes>
          </Col>
          <Container fluid className="fixed-bottom bg-container pt-1">
            <Player />
          </Container>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
