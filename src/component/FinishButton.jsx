function FinishButton({ id, setTodo }) {
  setTodo(function (prev) {
    // SetTodo로 새롭게 반환된걸 가져옴
    return prev.map(function (item) {
      // map으로 새로운 배열을 생성함
      if (item.id === id) {
        //item의 아이디와 1번줄의 아이디를 비교해서
        // 스프레드오퍼레이터로 item을 복사하고 복사한 객체의 isDone을 반대로 변경함
        const updatedItem = { ...item, isDone: !item.isDone };

        return updatedItem; // 그러면 73번줄의 복사한 객체를 그대로 반환함
      }
      return item; // 만약 71번줄에서 일치하지않으면 그냥 그대로 반환함
    });
  });
}
export default FinishButton;
