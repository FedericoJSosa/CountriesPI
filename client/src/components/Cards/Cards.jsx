import Card from "../Card/Card";
import { useSelector } from "react-redux";

const Cards=()=>{
    const country=useSelector(state=>state.country)
    
   
    return (
        <div>
            {country.map(country=>{
                return <Card 
                key={country.id}
                id={country.id}
                name={country.name}
                img={country.img}
                continent={country.continent}
                capital={country.capital}
                subregion={country.subregion}
                area={country.area}
                population={country.population} 
                />
            })}
        </div>
    )
};


export default Cards;