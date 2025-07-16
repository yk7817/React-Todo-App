const InputTodo = (props) => {
  const { onChangeInput, onChangeOption, onClickTodo, optionValue } = props;
  return (
    <div className="todo-add-form">
      {/* Todoリストに追加フォーム */}
      <h2>Todo追加フォーム</h2>
      <input type="text" onChange={onChangeInput} />
      <select value={optionValue} onChange={onChangeOption}>
        <option value="未着手">未着手</option>
        <option value="進行中">進行中</option>
        <option value="完了">完了</option>
      </select>
      <button onClick={onClickTodo}>追加</button>
    </div>
  );
};

export default InputTodo;
