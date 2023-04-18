import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";

import bg from "./img/bg.png";
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>

      <Container>
        <Row>
          <Col>
            <img
              className="shop-item"
              src="https://codingapple1.github.io/shop/shoes1.jpg"
            />
            <h4>상품명</h4> <p>상품설명</p>
          </Col>
          <Col>
            <img
              className="shop-item"
              src="https://codingapple1.github.io/shop/shoes2.jpg"
            />
            <h4>상품명</h4> <p>상품설명</p>
          </Col>
          <Col>
            <img
              className="shop-item"
              src="https://codingapple1.github.io/shop/shoes2.jpg"
            />{" "}
            <h4>상품명</h4> <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
