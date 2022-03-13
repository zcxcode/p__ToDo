import style from "./Task.module.scss";
import TaskManagerContext from "../TaskManagerContext";
import { useContext } from "react";

function Task({ itemsList }) {
  const { deleteTask } = useContext(TaskManagerContext);

  return (
    <ul>
      {itemsList.map((text, i) => (
        <li className={style.task} key={i} onClick={(e) => deleteTask(e.target.innerText)}>
          {text}
        </li>
      ))}
    </ul>
  );
}

export default Task;
