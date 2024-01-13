import React from "react";
import TodoItemsContextProvider from "./store/TodoItemsContext";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import Container from "./components/Container";
import AppName from "./components/AppName";

const App = () => {
  return (
    <TodoItemsContextProvider>

      <Container>
        <AppName />
      </Container>

      <Container>
        <AddTodo />
        <TodoItems />
      </Container>
      
    </TodoItemsContextProvider>
  );
};

export default App;
