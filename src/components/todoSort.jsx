const TodoSort = (props) => {
  const { sortValue, sortIgnition } = props;
  return (
    <div className="todo-filter">
      <h3>Sort</h3>
      <select value={sortValue} onChange={sortIgnition}>
        <option value="id順">id順</option>
        <option value="タイトル順">タイトル順</option>
      </select>
    </div>
  );
};

export default TodoSort;
