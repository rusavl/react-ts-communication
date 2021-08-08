import React, {createContext, useState} from 'react';

export interface StateProps {
  id: number;
  text: string;
  isFinished: boolean;
}

export interface ContextProps {
  todoList: StateProps[];
  handleChangeTodoList: (id: number) => void;
  handleAddTodoList: (todo: StateProps) => void;
}

// const MyContext = createContext<ContextProps | null>(null);
export const MyContext = createContext({} as ContextProps);

const MyProvider = (props: React.PropsWithChildren<{}>) => {
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
    <MyContext.Provider value={{todoList, handleChangeTodoList, handleAddTodoList}}>
      {(props as any).children}
    </MyContext.Provider>
  );
};
export default MyProvider;
