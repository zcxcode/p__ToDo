import { useEffect, useState } from "react";
import { checkToDoS, setToDoS } from "../../services/todoLStorage.handler";
import style from "./TaskManager.module.scss";
import TaskManagerContext from "./TaskManagerContext";
import Form from "./Form/Form";
import Task from "./Task/Task";

function TaskManager() {
  const [todos, setTodo] = useState(checkToDoS());

  useEffect(() => {
    setToDoS(todos);
  }, [todos]);

  const handlerForm = (formData) => {
    setTodo((arr) => [...arr, formData]);
  };

  const deleteTask = (id) => {
    setTodo(todos.filter((todo) => todo !== id));
  };

  const clearList = () => {
    setTodo([]);
  };

  return (
    <TaskManagerContext.Provider value={{ deleteTask, clearList }}>
      <div className={style.task_manager}>
        <div className={style.output}>
          <Task itemsList={todos} delTask={deleteTask} />
        </div>
        <Form handlerForm={handlerForm} validateObj={todos} />
      </div>
    </TaskManagerContext.Provider>
  );
}

export default TaskManager;
