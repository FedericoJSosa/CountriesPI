import style from "./Card.module.css";
import {Link} from "react-router-dom";

const Card=(props)=>{
    return (
        <div className={style.mainContainer}>
            <Link to={`/detail/${props.id}`}><img src={props.img}></img></Link>
            <p>Name: {props.name}</p>
            <p>Continent: {props.continent}</p>
        </div>
    )
};


export default Card;