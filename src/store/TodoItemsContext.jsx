import { createContext, useState } from "react";

/* creating the context using createContext hook */
export const TodoItemsContext = createContext();

/* creating the context provider  */
const TodoItemsContextProvider = ({ children }) => {
  /* todoitems data  */
  const todoitems = [
    { id: 1, todoName: "learn-springboot", todoDate: "10/2/2023" },
    { id: 2, todoName: "react-js", todoDate: "11/3/2024" },
    { id: 3, todoName: "mysql", todoDate: "22/8/2024" },
  ];

  const [items, setItems] = useState(todoitems);

  /* delete the todoitem */
  const deleteTodo = (name) => {
    console.log("delete todo");

    const newItems = items.filter((item) => item.todoName != name);
    setItems(newItems);
  };

  const addTodo=(name,date)=>{
    setItems((currentItems)=>[...currentItems,{id:name,todoName:name,todoDate:date}])
  }

  return (
    <TodoItemsContext.Provider value={{ items: items, deleteTodo: deleteTodo,addTodo:addTodo }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
