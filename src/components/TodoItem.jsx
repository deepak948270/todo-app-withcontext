import React from "react";
import styles from "../styles/TodoItem.module.css"
import { RiDeleteBin5Fill } from "react-icons/ri";

const TodoItem = ({item,deleteTodo}) => {
  return (
    <div className={styles.cont}>
      <div className="container text-center">
        <div className="row">
          <div className="col-4 fw-bolder">{item.todoName}</div>
          <div className="col-4">{item.todoDate}</div>
          <div className="col-2">
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteTodo(item.todoName)}
            >
            <RiDeleteBin5Fill /> remove {/* using react icon  */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
