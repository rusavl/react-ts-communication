import React, {useState, useContext} from 'react';
import {MyContext} from './MyProvider';

const TodoInput = () => {
  const [todoText, setTodoText] = useState('');

  const {handleAddTodoList} = useContext(MyContext);

  const handleTodoAdd = () => {
    handleAddTodoList({
      id: Date.now(),
      text: todoText,
      isFinished: false
    });
    setTodoText('');
  };
  const handleTextChange = (e: React.ChangeEvent) => {
    setTodoText((e.target as HTMLInputElement).value);
  };
  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="please input task"
        value={todoText}
        onChange={handleTextChange}></input>
      <button onClick={handleTodoAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
