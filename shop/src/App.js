import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import shoping from "./data.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [shoes, setshoes] = useState(shoping);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">React Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="datail">Features</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + bg + ")" }}
              ></div>

              <Container>
                <Row>
                  {shoes.map((a, i) => {
                    return <Product shoes={shoes[i]} i={i} />;
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route
          path="/datail"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + bg + ")" }}
              ></div>

              {shoes.map((a, i) => {
                return <DatailPro shoes={shoes[i]} i={i} />;
              })}
            </>
          }
        />
      </Routes>
    </div>
  );
}
function DatailPro(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
function Product(props) {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width="80%"
      />
      <h3>{props.shoes.id} </h3>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price} </p>
    </div>
  );
}

export default App;
