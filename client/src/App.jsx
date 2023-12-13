import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import './App.css'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/home" Component={Home} />
        <Route path="/detail" Component={Detail} />
        <Route path="/form" Component={Form} />
      </Routes>
    </div>
  )
}

export default App
