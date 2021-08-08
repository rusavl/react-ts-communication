import React, {useContext} from 'react';
import {MyContext, StateProps} from './MyProvider';

interface IProps {
  key: number;
  todo: StateProps;
}
const TodoItem = ({todo}: IProps) => {
  const {handleChangeTodoList} = useContext(MyContext);

  const handleChange = () => {
    handleChangeTodoList(todo.id);
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
