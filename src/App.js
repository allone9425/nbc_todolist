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

  //완료 클릭하면 이동하기 섹션

  //워킹 투두  -> 투두 내용중 필터함수는 true 혹은 false를 반환하는데 이건 !라고 적혀있어서 false인것만 포함해서 필터하기
  const workingTodos = todo.filter(function (item) {
    return !item.isDone;
  });

  //돈 투두 -> 이건 ture인것만 필터하기
  const doneTodos = todo.filter(function (item) {
    return item.isDone;
  });

  function finishButton(id) {
    setTodo(function (prev) {
      // SetTodo로 새롭게 반환된걸 가져옴
      return prev.map(function (item) {
        // map으로 새로운 배열을 생성함
        if (item.id === id) {
          //item의 아이디와 68번줄의 아이디를 비교해서
          // isDone 값을 반대로 업데이트
          const updatedItem = { ...item, isDone: !item.isDone }; // 스프레드오퍼레이터로 item을 복사하고 복사한 객체의 isDone을 반대로 변경함

          return updatedItem; // 그러면 73번줄의 복사한 객체를 그대로 반환함
        }
        return item; // 만약 71번줄에서 일치하지않으면 그냥 그대로 반환함
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
                      취소
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
