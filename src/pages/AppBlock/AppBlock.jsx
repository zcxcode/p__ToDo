import style  from "./AppBlock.module.scss"
import Clock from "../../components/Clock"
import TaskManager from "./TaskManager/TaskManager"

function AppBlock() {
  return (
      <div className={style.todo}>
        <div className={style.todo__inner}>
          < Clock />
          < TaskManager />
        </div>
      </div>
  )
}

export default AppBlock