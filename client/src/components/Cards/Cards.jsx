import Card from "../Card/Card";
import { useSelector } from "react-redux";

const Cards=()=>{
    const country= useSelector(state=>state.country);
    const currentPage = useSelector((state) => state.currentPage);
    const pageSize = useSelector((state) => state.pageSize);
  /*   const filter= useSelector((state)=> state.filter)
    const order= useSelector((state)=> state.order)
    const criteria= useSelector((state)=> state.criteria) */

    const startIndex = (currentPage-1) * pageSize;
    const endIndex = startIndex + pageSize;
    const countriesToShow = country.slice(startIndex, endIndex);
    
    
    
   
    return (
        <div>
            {countriesToShow.map(country=>{
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