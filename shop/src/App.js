import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import shoping from "./data.js";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";

function App() {
  let [shoes, setshoes] = useState(shoping);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">React Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate(1);
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/datail");
              }}
            >
              Features
            </Nav.Link>
            {/* a 태그와 동일함 */}
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
        {/* <Route
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
        /> */}
        <Route path="/datail/:id" element={<DatailPro shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>/about/member입니당</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        <Route path="*" element={<div>없는페이지입니다.</div>} />
      </Routes>
    </div>
  );
}
function Event() {
  return (
    <div>
      <h4>오늘의 이벤트!</h4>
      <Outlet></Outlet>
    </div>
  );
}
function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function DatailPro(props) {
  // let [shoes] = useState(); 이렇게 쓰면 수정을 두번해야함..
  let { id } = useParams();

  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });
  // props.shoes.find((x) => x.id == id ) 짧은버전
  console.log(id);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${id}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price} </p>
          <h3>{찾은상품.id} </h3>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
} // 다른곳에 만들어서 export default DatailPro;  import 잘하면 끝!
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
