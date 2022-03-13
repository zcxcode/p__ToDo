import { Link } from "react-router-dom";
import style from "./Header.module.scss"

function Header() {
  return (
    <header className={style.header}>
      <p className={style.header__title}>ToDo List</p>
      <div>
        < Link className={style.link} to="/p__ToDo"> App </Link>
        < Link className={style.link} to="/p__ToDo/about"> About </Link>
      </div>
    </header>
  );
}

export default Header