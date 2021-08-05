import React from 'react';
import {StateProps} from './Todo';

interface IProps {
  todo: StateProps;
  changeTodo: (id: number) => void;
}
const TodoItem = ({todo, changeTodo}: IProps) => {
  const handleChange = () => {
    changeTodo(todo.id);
  };

  const spanStyle = {
    textDecoration: todo.isFinished ? 'line-through' : 'none'
  };
  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.isFinished} onChange={handleChange} />
      <span style={spanStyle}>{todo.text}</span>
    </div>
  );
};

export default TodoItem;
