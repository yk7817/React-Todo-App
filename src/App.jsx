import { useState, useRef } from "react";
import "./App.css";
import InputTodo from "./components/inputTodo";
import TodoList from "./components/todoList";
import SettingTodo from "./components/settingTodo";
import TodoSort from "./components/todoSort";

function App() {
  // state
  const [todoInputValue, setTodoInputValue] = useState("");
  const [optionValue, setOptionValue] = useState("未着手");
  const [todoList, setTodoList] = useState([]);
  const [todoSettingValue, setTodoSettingValue] = useState({});
  const [settingInputValue, setSettingInputValue] = useState("");
  const [settingOptionValue, setSettingOptionValue] = useState("");
  const [sortValue, setSort] = useState("id順");

  // id用カウント
  let idCount = useRef(1);

  // 追加フォームで使用する関数
  const inputValueSet = (e) => {
    setTodoInputValue(e.target.value);
  };

  // 選ばれているoptionをセット
  const optionValueSet = (e) => {
    const optionValue = e.target.value;
    setOptionValue(optionValue);
  };

  // 追加ボタンクリックした後のstate管理
  const addTodoSet = () => {
    const title = todoInputValue;
    const state = optionValue;
    setTodoList([...todoList, { id: idCount.current, title, state }]);
    idCount.current++;
  };

  // 削除した際の要素のkey番号を引数で受け取り
  // key番号と一致していない要素で新たに配列を作成
  const todoDelete = (deleteTodoIndex) => {
    const newTodoList = todoList.filter((_, i) => deleteTodoIndex !== i);
    setTodoList(newTodoList);
  };
  const todoSetting = (index, title, state) => {
    setTodoSettingValue({ index, title, state });
  };

  // 反映ボタン押下後
  // 既存のtodoListから編集前のtodo以外を新しい配列として定義
  // ↑で定義したtodoListに編集後のtitle,stateを新たに追加
  // 編集用stateを空にしてdomから削除
  const complateSetting = (settingIndex, title, state) => {
    const newTodoList = todoList.filter((_, i) => settingIndex !== i);
    setTodoList([...newTodoList, { title, state }]);
    setTodoSettingValue({});
  };

  // ソート関数
  const sortIgnition = (e) => {
    const sortValue = e.target.value;
    setSort(sortValue);
    setTodoList((prevTodoList) => {
      const newTodoList = [...prevTodoList];
      return sortValue === "タイトル順"
        ? newTodoList.sort((a, b) => a.title.localeCompare(b.title, "ja"))
        : newTodoList.sort((a, b) => a.id - b.id);
    });
  };

  // コンソールログチェック
  console.log(todoList);

  return (
    <div>
      <InputTodo
        onChangeInput={inputValueSet}
        onChangeOption={optionValueSet}
        onClickTodo={addTodoSet}
        value={optionValue}
      />
      {/* ソート機能 */}
      <TodoSort sort={sortValue} sortIgnition={sortIgnition} />
      {/* Todoリスト */}
      <TodoList todoList={todoList} todoDelete={todoDelete} todoSetting={todoSetting} />
      {/* 編集画面 */}
      <SettingTodo
        todoSettingValue={todoSettingValue}
        settingInputValue={settingInputValue}
        setSettingInputValue={setSettingInputValue}
        settingOptionValue={settingOptionValue}
        setSettingOptionValue={setSettingOptionValue}
        complateSetting={complateSetting}
      />
    </div>
  );
}

export default App;
