const SettingTodo = (props) => {
  const {
    todoSettingValue,
    settingInputValue,
    setSettingInputValue,
    settingOptionValue,
    setSettingOptionValue,
    complateSetting,
  } = props;

  const handleComplate = () => {
    complateSetting(
      todoSettingValue.index,
      settingInputValue,
      settingOptionValue
    );
  }
  
  return (
    <>
      {Object.keys(todoSettingValue).length !== 0 ? (
        <div key={todoSettingValue.index}>
          <hr />
          <input
            type="text"
            value={settingInputValue}
            onChange={(e) => setSettingInputValue(e.target.value)}
          />
          <select
            value={settingOptionValue}
            onChange={(e) => setSettingOptionValue(e.target.value)}
          >
            <option value="未着手">未着手</option>
            <option value="進行中">進行中</option>
            <option value="完了">完了</option>
          </select>
          <button
            onClick={handleComplate}
          >
            反映
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SettingTodo;

//   {/* 編集画面 */}
//   {Object.keys(todoSettingValue).length !== 0 ? (
//     <div key={todoSettingValue.index}>
//       <hr />
//       <input
//         type="text"
//         value={settingInputValue}
//         onChange={(e) => setSettingInputValue(e.target.value)}
//       />
//       <select
//         value={settingOptionValue}
//         onChange={(e) => setSettingOptionValue(e.target.value)}
//       >
//         <option value="未着手">未着手</option>
//         <option value="進行中">進行中</option>
//         <option value="完了">完了</option>
//       </select>
//       <button
//         onClick={() =>
//           complateSetting(
//             todoSettingValue.index,
//             settingInputValue,
//             settingOptionValue
//           )
//         }
//       >
//         反映
//       </button>
//     </div>
//   ) : (
//     ""
//   )}
