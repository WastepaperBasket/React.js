import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import bg from "./img/bg.png";
import { createContext, useContext, useEffect, useState } from "react";
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
import axios from "axios";
import Cart from "./routes/Cart.js";

let Context1 = createContext();

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
  let [shoes, setShoes] = useState(shoping);
  let [재고] = useState([10, 11, 12]);
  let navigate = useNavigate();
  let [click, setClick] = useState(1);
  let [loding, setLoding] = useState(false);
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

              {loding == true ? <Loding /> : null}
              <button
                onClick={() => {
                  setLoding(true); // 로딩 ui 출력
                  setClick(click + 1);
                  if (click == 1) {
                    axios
                      .get(`https://codingapple1.github.io/shop/data2.json`)
                      .then((result) => {
                        let copy = [...shoes, ...result.data];
                        setShoes(copy);
                        setLoding(false); // 로딩 UI 숨기기
                      })
                      .catch(() => {
                        console.log("실패");
                      });
                  }
                  if (click == 2) {
                    axios
                      .get(`https://codingapple1.github.io/shop/data3.json`)
                      .then((result) => {
                        let copy = [...shoes, ...result.data];
                        setShoes(copy);
                      })
                      .catch(() => {
                        console.log("실패");
                      });
                  }
                  if (click == 3) {
                    alert("더이상 상품이 없습니다.");
                  }
                  Promise.all([axios.get("/url1"), axios.get("/url2")]).then(
                    () => {}
                  ); //동시에 여러곳 주고받고싶을때
                  axios.post("/asdfasf", { name: "kim" });
                }}
              >
                더보기
              </button>
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

        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고, shoes }}>
              <DatailPro shoes={shoes} />
            </Context1.Provider>
          }
        />
        <Route path="/cart" element={<Cart />} />
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

function Loding() {
  return (
    <>
      <h4>로딩중입니다..</h4>
      <h4>기다려주세요...</h4>
    </>
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
  let [num, setNum] = useState("");
  let [tab, setTab] = useState(0);
  let [fade, setFade] = useState("");

  let { 재고, shoes } = useContext(Context1);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("그러지마세요!");
    }
    setFade("end");
    return () => {
      setFade("");
    };
  }, [num]);

  let { id } = useParams();

  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });
  // props.shoes.find((x) => x.id == id ) 짧은버전

  return (
    <div className={`container start ${fade}`}>
      {alert2 == true ? (
        <div className="alert alert-warning">{timer} 초이내 구매시 할인</div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${id}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h1>냠냠</h1>
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
        <Nav fill variant="tabs" defaultActiveKey="link0" className="mt-3">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(0);
              }}
              eventKey={"link0"}
            >
              Active
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(1);
              }}
              eventKey={"link1"}
            >
              Loooonger NavLink
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(2);
              }}
              eventKey={"link2"}
            >
              Link
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(3);
              }}
              eventKey={"link3"}
            >
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {/* {tab == 0 ? <div>내용0</div> : null} */}
        <TabContent tab={tab} />
      </div>
    </div>
  );
}
function TabContent({ tab }) {
  let [fade, setFade] = useState("");
  let { 재고 } = useContext(Context1);
  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    }; // useEffect 실행전에 적는 코드
  }, [tab]);
  return (
    <div className={`start ${fade}`}>
      {[<div>{재고}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}
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
