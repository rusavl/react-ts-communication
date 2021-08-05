import TodoItem from './TodoItem';
import {StateProps} from './Todo';

interface IProps {
  todoList: StateProps[];
  changeTodo: (id: number) => void;
}

const styles = {
  marginTop: '20px'
};

const TodoList = ({todoList, changeTodo}: IProps) => {
  const todoListItem = todoList.map(item => {
    return <TodoItem key={item.id} todo={item} changeTodo={changeTodo}></TodoItem>;
  });
  return (
    <div className="todo-list" style={styles}>
      {todoListItem}
    </div>
  );
};
export default TodoList;
