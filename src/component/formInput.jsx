function TodoAdd({ todo, setTodo, title, setTitle, text, setText }) {
  const onSubmitHandler = (e) => {
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
  return (
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
        할일추가 ✒️
      </button>
    </form>
  );
}

export default TodoAdd;
