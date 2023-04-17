import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  let [title, settitle] = useState([
    "남성 코트 추천",
    "강남 우동 맛집",
    "남녀노소 신발 추천",
  ]);
  let [logo, setLogo] = useState("ReactBlog");
  let [like, setlike] = useState(0);
  let [modal, setModal] = useState(false);

  let [liked, setliked] = useState([1, 2, 3]);
  let [title2, setTitle2] = useState(0);

  let [입력값, 입력값변경] = useState("");

  function setDate() {
    let copy = [...title];
    copy[0] = "여자 코트 추천";
    settitle(copy);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>

      <button onClick={setDate}>이름변경</button>
      <button
        onClick={() => {
          let copy = [...title].sort();
          settitle(copy);
        }}
      >
        가나다순 정렬
      </button>

      {modal == true ? (
        <Modal
          setDate={setDate}
          color={"yellow"}
          title2={title2}
          title={title}
        />
      ) : null}

      {title.map(function (i, a) {
        // a는 0이 되고 , 1이 되는..
        return (
          <div className="list" key={a}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle2(a);
              }}
            >
              {title[a]}
            </h4>
            <span
              onClick={() => {
                let copy = [...liked];
                copy[a] = copy[a] + 1;
                setliked(copy);
              }}
            >
              🫰
            </span>
            {liked[a]}
            <p>2월17일 발행</p>
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(a, 1);
                settitle(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <Modal2></Modal2>
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
          console.log(입력값);
        }}
      />
      <button
        onClick={() => {
          let copy = [...title];
          copy.unshift(입력값);
          settitle(copy);
        }}
      >
        글발행
      </button>
    </div>
  );
}
function Modal(props) {
  // let [title2, setTitle2] = useState(0);
  return (
    <>
      <div className="modal" style={{ background: props.color }}>
        <h4>{props.title[props.title2]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={props.setDate}>글수정</button>
      </div>
    </>
  );
}

class Modal2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "kim",
      age: 20,
    };
  }
  render() {
    return (
      <div>
        앙뇽 {this.state.name} {this.state.age}
        <button
          onClick={() => {
            this.setState({ age: 21 });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

export default App;
