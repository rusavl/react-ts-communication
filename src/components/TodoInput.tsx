import React, {useState} from 'react';
import {StateProps} from './Todo';
interface IProps {
  addTodo: (todo: StateProps) => void;
}
const TodoInput = ({addTodo}: IProps) => {
  const [todoText, setTodoText] = useState('');
  const handleTodoAdd = () => {
    addTodo({
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
