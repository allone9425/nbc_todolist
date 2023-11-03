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

  //추가하기 버튼 누르면 입력되게 하기
  const onSubmitHandler = (e) => {
    //alert("됩니다");
    e.preventDefault(); //새로고침 막는 것
    const newTodo = {
      id: todo.length + 1,
      title: title,
      body: text,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
    setTitle("");
    setText("");
  };

  //삭제하기 버튼
  const deleteButton = (id) => {
    //alert(id);

    const newTodo = todo.filter(function (todo) {
      return todo.id !== id;
    });
    setTodo(newTodo);
  };

  //완료 클릭하면 이동하기
  const workingTodos = todo.filter(function (item) {
    return !item.isDone;
  });

  const doneTodos = todo.filter(function (item) {
    return item.isDone;
  });

  function finishButton(id) {
    setTodo(function (prevTodos) {
      return prevTodos.map(function (item) {
        if (item.id === id) {
          // isDone 값을 반대로 업데이트
          const updatedItem = { ...item, isDone: !item.isDone };
          return updatedItem;
        }
        return item;
      });
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>My To do List</p>
        <p>React</p>
      </header>

      <form className="input-form">
        <div className="input-box">
          <label htmlFor="input-title">제목</label>
          <input
            type="text"
            id="input-title"
            value={title}
            onChange={function (e) {
              setTitle(e.target.value);
            }}
          />

          <label htmlFor="input-text">내용</label>
          <input
            type="text"
            id="input-text"
            value={text}
            onChange={function (e) {
              setText(e.target.value);
            }}
          />
        </div>
        <button id="input-btn" onClick={onSubmitHandler}>
          추가하기
        </button>
      </form>
      <section>
        <h3>Working</h3>
        <div className="todo-box-frame">
          {
            workingTodos.map(function (item) {
              return (
                <div className="todo-box" key={item.id}>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  <article>
                    <button
                      className="btn-delete"
                      onClick={() => deleteButton(item.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="btn-finish"
                      onClick={() => finishButton(item.id)}
                    >
                      {item.isDone ? "취소" : "완료"}
                    </button>
                  </article>
                </div>
              );
            })

            /* <div className="todo-box">
            <h4>{todo[0].title}</h4>
            <p>{todo[0].body}</p>
            <article>
              <button className="btn-delete">삭제하기</button>
              <button className="btn-finish">완료</button>
            </article>
          </div>*/
          }
        </div>
      </section>
      <section>
        <h3>Done</h3>
        <div className="todo-box-frame-done">
          {
            doneTodos.map(function (item) {
              return (
                <div className="todo-box" key={item.id}>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  <article>
                    <button
                      className="btn-delete"
                      onClick={() => deleteButton(item.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="btn-finish"
                      onClick={() => finishButton(item.id)}
                    >
                      완료
                    </button>
                  </article>
                </div>
              );
            })

            /* <div className="todo-box">
            <h4>{todo[0].title}</h4>
            <p>{todo[0].body}</p>
            <article>
              <button className="btn-delete">삭제하기</button>
              <button className="btn-finish">완료</button>
            </article>
          </div>*/
          }
        </div>
      </section>
    </div>
  );
}

export default App;
