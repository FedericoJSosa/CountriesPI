import style from "./Card.module.css";

const Card=(props)=>{
    return (
        <div className={style.mainContainer}>
            {<img src={props.img}></img>}
            <p>Name: {props.name}</p>
            <p>Continent: {props.continent}</p>
        </div>
    )
};


export default Card;