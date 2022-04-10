import { useDispatch, useSelector } from "react-redux";
import style from "./Form.module.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Form({ handlerForm, validateObj }) {
  const dispatch = useDispatch();
  const userInput = useSelector((state) => state.input);

  const addTask = (taskObj) => {
    if (userInput === "" || userInput === "Enter text!") {
      dispatch({ type: "USER_INPUT", content: "Enter text!" });
      const clearField = setTimeout(() => {
        dispatch({ type: "USER_INPUT", content: "" });
        clearTimeout(clearField);
      }, 500);
    } else {
      dispatch({ type: "ADD_TASK", content: taskObj });
      dispatch({ type: "USER_INPUT", content: "" });
    }
  };

  const handlerInput = (e) => {
    const text = e.currentTarget.value;
    dispatch({ type: "USER_INPUT", content: text });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const taskObj = {
      title: userInput,
      id: Date.now()
    };
    addTask(taskObj);
  };

  return (
    <div className="task-input">
      <form className={style.form} onSubmit={handlerSubmit}>
        <label>
          <TextField
            value={userInput}
            onChange={handlerInput}
            className={style.textarea}
            label="Enter task"
            variant="filled"
          />
        </label>
        <Button className={style.addbtn} variant="contained" type="submit">
          Add
        </Button>
        <Button
          variant="contained"
          type="button"
          onClick={() => {
            dispatch({ type: "CLEAR_LIST" });
          }}
        >
          Clear list
        </Button>
      </form>
    </div>
  );
}

export default Form;
