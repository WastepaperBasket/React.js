import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, b] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "여자 신발 추천",
  ]);
  let [logo, setLogo] = useState("ReactBlog");
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4> {title[0]}</h4>
        <p>2월17일 발행</p>
      </div>
      <div className="list">
        <h4> {title[1]}</h4>
        <p>2월17일 발행</p>
      </div>
      <div className="list">
        <h4> {title[2]}</h4>
        <p>2월17일 발행</p>
      </div>
    </div>
  );
}

export default App;
