import { useState, useContext } from "react";
import TaskManagerContext from "../TaskManagerContext";
import style from "./Form.module.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Form({ handlerForm, validateObj }) {
  const [userInput, setUserInput] = useState("");
  const { clearList } = useContext(TaskManagerContext);

  const handlerInput = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
    const errMsg = "Enter uniq task please!";
    const errMsgEmpty = "Enter task please!";
    if (userInput === "" || userInput === " ") {
      document.querySelector(`.${style.textarea} input`).setAttribute("readOnly", true);
      setUserInput(errMsgEmpty);
      setTimeout(() => {
        document.querySelector(`.${style.textarea} input`).removeAttribute("readOnly");
        setUserInput("");
      }, 2000);
    } else if (!validateObj.includes(userInput) && userInput !== errMsg && userInput !== errMsgEmpty) {
      handlerForm(userInput);
      setUserInput("");
    } else {
      document.querySelector(`.${style.textarea} input`).setAttribute("readOnly", true);
      setUserInput(errMsg);
      setTimeout(() => {
        document.querySelector(`.${style.textarea} input`).removeAttribute("readOnly");
        setUserInput("");
      }, 2000);
    }
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
            localStorage.clear();
            clearList();
          }}
        >
          Clear list
        </Button>
      </form>
    </div>
  );
}

export default Form;
