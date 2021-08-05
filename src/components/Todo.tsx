import {useState} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export interface StateProps {
  id: number;
  text: string;
  isFinished: boolean;
}

function Todo() {
  const [todoList, setTodoList] = useState<StateProps[]>([]);

  const handleChangeTodoList = (id: number) => {
    const newTodoList = todoList.map(item => {
      if (item.id === id) {
        return Object.assign({}, item, {
          isFinished: !item.isFinished
        });
      }
      return item;
    });
    setTodoList(newTodoList);
  };

  const handleAddTodoList = (todo: StateProps) => {
    console.log(todo);
    setTodoList([...todoList, todo]);
  };
  return (
    <div className="todo" style={{paddingLeft: '50px'}}>
      <TodoInput addTodo={handleAddTodoList}></TodoInput>
      <TodoList todoList={todoList} changeTodo={handleChangeTodoList}></TodoList>
    </div>
  );
}

export default Todo;
