import {Link} from "react-router-dom";
import style from "./NavBar.module.css";
import { useDispatch } from "react-redux";




const NavBar=()=>{
    return (
        <div>
            <Link to="/"><button className={style.button}>Landing </button></Link>
            <Link to="/home"><button className={style.button}>Home</button></Link>
            <Link to="/form"><button className={style.button}>Form</button></Link>
        </div>
    )
};


export default NavBar;