import React, { useContext, useState } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import styles from "../styles/AddTodo.module.css"
import { IoMdAddCircle } from "react-icons/io";

const AddTodo = () => {
  const { addTodo } = useContext(TodoItemsContext);

  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const todoHandler = (event) => {
    setTodoName(event.target.value);
  };

  const dateHandler = (event) => {
    setTodoDate(event.target.value);
  };

  const clickHandler = () => {
    if(todoDate!='' && todoName !=''){
    addTodo(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
     }else{
        console.log("please provide some values")
     }

  };
  return (
    <div className={styles.mycont} >
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              placeholder="enter todo here"
              value={todoName}
              onChange={todoHandler}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              placeholder="enter date "
              value={todoDate}
              onChange={dateHandler}
            />
          </div>
          <div className="col-2">
            <button className="btn btn-outline-success" onClick={clickHandler}>
            <IoMdAddCircle />  add todo {/* using react-icon  */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
