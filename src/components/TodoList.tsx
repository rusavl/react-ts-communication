import {useContext} from 'react';
import TodoItem from './TodoItem';
import {MyContext} from './MyProvider';

const styles = {
  marginTop: '20px'
};

const TodoList = () => {
  const {todoList} = useContext(MyContext);

  const todoListItem = todoList.map(item => {
    return <TodoItem key={item.id} todo={item}></TodoItem>;
  });
  return (
    <div className="todo-list" style={styles}>
      {todoListItem}
    </div>
  );
};
export default TodoList;
