import style from "./Task.module.scss";
import { useSelector, useDispatch } from "react-redux";

function Task() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.tasks);
  console.log(todos);
  function deleteTask(i) {
    dispatch({ type: "REMOVE_TASK", content: i });
  }

  return (
    <ul>
      {todos.map((i) => (
        <li
          id={i.id}
          className={style.task}
          key={i.id}
          onClick={(e) => {
            deleteTask(e.target.id);
          }}
        >
          {i.title}
        </li>
      ))}
    </ul>
  );
}

export default Task;
