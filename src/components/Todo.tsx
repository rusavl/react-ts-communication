import {useState} from 'react';
import MyProvider from './MyProvider';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const styles = {
  paddingLeft: '50px'
};

const Todo = () => {
  return (
    <MyProvider>
      <div className="todo" style={styles}>
        <TodoInput />
        <TodoList />
      </div>
    </MyProvider>
  );
};

export default Todo;
