import React, { useState } from "react";
import "./App.css";
import "./reset.css";

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
      title: "주말에 착용할 리본 핀 고르기",
      body: "주말에 착용할 리본 핀을 골라보죠!",
      isDone: true,
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <p>My To do List</p>
        <p>React</p>
      </header>

      <form className="input-form">
        <div className="input-box">
          <label for="input-title">제목</label>
          <input type="text" id="input-title" />
          <label for="input-text">내용</label>
          <input type="text" id="input-text" />
        </div>
        <button id="input-btn">추가하기</button>
      </form>
      <section>
        <h3>Working</h3>
        <div className="todo-box-frame">
          <div className="todo-box">
            <h4>{todo[0].title}</h4>
            <p>{todo[0].body}</p>
            <article>
              <button className="btn-delete">삭제하기</button>
              <button className="btn-finish">완료</button>
            </article>
          </div>
          {/*todo-box*/}
          <div className="todo-box">
            <h4>{todo[1].title}</h4>
            <p>{todo[1].body}</p>
            <article>
              <button className="btn-delete">삭제하기</button>
              <button className="btn-finish">완료</button>
            </article>
          </div>
          {/*todo-box*/}
        </div>
      </section>
      <section>
        <h3>Done</h3>
        <div className="todo-box-frame-done">
          <div className="todo-box">
            <h4>리액트 공부하기</h4>
            <p>리액트 기초를 공부해봅시다.</p>
            <article>
              <button className="btn-delete">삭제하기</button>
              <button className="btn-finish">완료</button>
            </article>
          </div>
          {/*todo-box*/}
        </div>
      </section>
    </div>
  );
}

export default App;
