import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import "./fonts.css"
import style from "./App.module.scss"
import AppBlock from "./components/AppBlock/AppBlock";
import About from "./components/About/About";

function App() {
  return (
      <Router>
        <div className={style.App}>
          < Header />
          <Routes>
            <Route path="/p__ToDo" element={<AppBlock />}/>
            <Route path="/p__ToDo/about" element={<About />}/>
          </Routes>
        </div>
      </Router>

  )
}

export default App;
