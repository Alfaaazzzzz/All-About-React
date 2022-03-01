import React, { useContext } from "react";

import TodoList from "./TodoList";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos:React.FC = () => {
    const TodosCtx= useContext(TodosContext)
  return (
    <ul className={classes.todos}>
      {TodosCtx.items.map((item) => (
        <TodoList
          key={item.id}
          text={item.text}
          deleteTodo={TodosCtx.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
