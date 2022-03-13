import { useEffect, useState } from "react";
import style from "./TaskManager.module.scss";
import TaskManagerContext from "./TaskManagerContext";
import Form from "./Form/Form";
import Task from "./Task/Task";

function TaskManager() {
  const [todos, setTodos] = useState(() => {
    const savedTodo = localStorage.getItem("todo");
    if (savedTodo) {
      return JSON.parse(savedTodo);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const handlerForm = (formData) => {
      setTodos((arr) => [...arr, formData]);
  };

  const validateObj = (item) => {
    return !todos.includes(item)

  }

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo !== id));
  };

  const clearList = () => {
    setTodos([]);
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
