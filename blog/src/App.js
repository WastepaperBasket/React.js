import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, settitle] = useState([
    "남성 코트 추천",
    "강남 우동 맛집",
    "남녀노소 신발 추천",
  ]);
  let [logo, setLogo] = useState("ReactBlog");
  let [like, setlike] = useState(0);
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
      <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              setlike(like++);
            }}
          >
            🫰
          </span>
          {like}
        </h4>
        <p>2월17일 발행</p>

        {/* <button
          onClick={() => {
            settitle(["여자 코트 추천", "강남 우동 맛집", "여자 신발 추천"]);
          }}
        >
          이름변경
        </button> 잘못된 변경법임 */}
      </div>
      <div className="list">
        <h4> {title[1]}</h4>
        <p>2월17일 발행</p>
      </div>
      <div className="list">
        <h4> {title[2]}</h4>
        <p>2월17일 발행</p>
      </div>
      <Modal />
    </div>
  );
}
function Modal() {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}
export default App;
