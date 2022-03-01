import React from "react";
import classes from "./TodoList.module.css";

const TodoList: React.FC<{ text: string; deleteTodo: () => void }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.deleteTodo}>
      {props.text}
    </li>
  );
};

export default TodoList;
