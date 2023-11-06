import React, { useState } from "react";
import "./App.css";
import "./reset.css";

// 최상단 헤더
import Header from "./component/Header.jsx";
//내용입력하는 인풋박스
import TodoAdd from "./component/formInput.jsx";
//working 섹션 부분
import Work from "./component/Work.jsx";
//Done 섹션 부분
import Done from "./component/Done.jsx";
// 완료 혹은 취소를 클릭할 경우 상태를 변경해주는 버튼
import FinishButton from "./component/FinishButton.jsx";
// 삭제버튼
import DeleteButton from "./component/Delete.jsx";
function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "리액트 투두 리스트 만들기",
      body: "리액트 투두 리스트 만들기.",
      isDone: false,
    },
    {
      id: 2,
      title: "카페 고르기",
      body: "주말에 방문할 카페를 골라보죠!",
      isDone: false,
    },
    {
      id: 3,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);

  //입력 박스에 대한 스테이트 설정
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="App">
      <Header />
      <TodoAdd
        todo={todo}
        setTodo={setTodo}
        title={title}
        setTitle={setTitle}
        text={text}
        setText={setText}
      />
      <section>
        <h3>진행중 🔥</h3>
        <Work
          todo={todo}
          deleteButton={(id) => DeleteButton({ id, setTodo, todo })}
          finishButton={(id) => FinishButton({ id, setTodo })}
        />
      </section>
      <section>
        <h3>완료 ✔️</h3>
        <Done
          todo={todo}
          deleteButton={(id) => DeleteButton({ id, setTodo, todo })}
          finishButton={(id) => FinishButton({ id, setTodo })}
        />
      </section>
    </div>
  );
}

export default App;
