import {Link} from "react-router-dom";
import style from "./Landing.module.css";
import img from "./landing.jpg"


const Landing=()=>{
    return (
        <div className={style.landing}>
            <Link to="/home"><button className={style.button}>Home</button></Link>
            <img src={img} alt="Not found" className={style.image}/>
        </div>
    )
};


export default Landing;