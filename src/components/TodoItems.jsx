import React, { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import TodoItem from "./TodoItem";

const TodoItems = () => {
  const { items,deleteTodo} = useContext(TodoItemsContext);
  return (
    <div>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoItems;
