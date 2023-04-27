import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import bg from "./img/bg.png";
import { useEffect, useState } from "react";
import shoping from "./data.js";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

let NewBtn = styled.button(YellowBtn);

let Box = styled.div`
  background: grey;
  padding: 20px;
`;

let Div = styled.div`
  cursor: pointer;
`;

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
      <Box>
        <YellowBtn bg="blue"> 버튼</YellowBtn>
      </Box>
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
        <Route path="/detail/:id" element={<DatailPro shoes={shoes} />} />

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

// class Detail2 extends React.Component {
//   componentDidMount() {
//     // 컴포넌트 mount시 여기 코드 실행
//   }
//   componentDidUpdate() {
//     // 컴포넌트 update시 여기 코드 실행
//   }
//   componentWillUnmount() {
//     // 컴포넌트 unmount시 여기 코드 실행
//   }
// } 옛날방식

function DatailPro(props) {
  // let [shoes] = useState(); 이렇게 쓰면 수정을 두번해야함..
  // new 방식
  let [timer, setTimer] = useState(5);
  let [alert2, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let [num, setNum] = useState("");

  useEffect(() => {
    let time = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(time);
    };
  }, []);
  useEffect(() => {
    if (isNaN(num) == true) {
      alert("그러지마세요!");
    }
  }, [num]);

  let { id } = useParams();

  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });
  // props.shoes.find((x) => x.id == id ) 짧은버전

  return (
    <div className="container">
      {alert2 == true ? (
        <div className="alert alert-warning">{timer} 초이내 구매시 할인</div>
      ) : null}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${id}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          ></input>
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
      <Div>
        <img
          src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
          width="80%"
        />
        <h3>{props.shoes.id} </h3>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price} </p>
      </Div>
    </div>
  );
}

export default App;
