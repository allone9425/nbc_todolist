//삭제하기 버튼
const DeleteButton = ({ id, setTodo, todo }) => {
  //alert(id);

  const newTodo = todo.filter(function (todo) {
    return todo.id !== id;
  });
  setTodo(newTodo);
};

export default DeleteButton;
