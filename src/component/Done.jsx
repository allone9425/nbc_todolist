const Done = ({ todo, deleteButton, finishButton }) => {
  const doneTodos = todo.filter(function (item) {
    return item.isDone;
  });

  return (
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
                  삭제
                </button>
                <button
                  className="btn-finish btn-cancel"
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
  );
};

export default Done;
