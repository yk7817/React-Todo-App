const TodoList = (props) => {
  const { todoList, todoSetting, todoDelete } = props;
  return (
    <>
      {todoList.length !== 0 ? (
        todoList.map((todoItem, index) => (
          <ul key={index} className="todo_list">
            <li>
              {todoItem.title}
              <span>{todoItem.state}</span>
              <button
                onClick={() =>
                  todoSetting(index, todoItem.title, todoItem.state)
                }
              >
                編集
              </button>
              <button onClick={() => todoDelete(index)}>削除</button>
            </li>
          </ul>
        ))
      ) : (
        <p>現在タスクはありません</p>
      )}
    </>
  );
};

export default TodoList;

//   {todoList.length !== 0 ? (
//     todoList.map((todoItem, index) => (
//       <ul key={index} className="todo_list">
//         <li>
//           {todoItem.title}
//           <span>{todoItem.state}</span>
//           <button
//             onClick={() =>
//               todoSetting(index, todoItem.title, todoItem.state)
//             }
//           >
//             編集
//           </button>
//           <button onClick={() => todoDelete(index)}>削除</button>
//         </li>
//       </ul>
//     ))
//   ) : (
//     <p>現在タスクはありません</p>
//   )}
