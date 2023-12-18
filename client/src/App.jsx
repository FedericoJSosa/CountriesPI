import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import NavBar from "./components/NavBar/NavBar";

import './App.css'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/home" Component={Home} />
        <Route path="/form" Component={Form} />
        <Route path="/detail/:id" Component={Detail} />
      </Routes>
    </div>
  )
}

export default App
