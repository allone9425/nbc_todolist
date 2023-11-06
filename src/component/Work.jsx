const Work = function ({ todo, deleteButton, finishButton }) {
  const workingTodos = todo.filter(function (item) {
    return !item.isDone;
  });
  return (
    <div className="todo-box-frame">
      {workingTodos.map(function (item) {
        return (
          <div className="todo-box" key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
            <article>
              <button
                className="btn-delete"
                onClick={() => deleteButton(item.id)}
              >
                삭제
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
      })}
    </div>
  );
};

export default Work;
