import Card from "../Card/Card";

const Cards=()=>{
    const country=[{
        "id": "VMH",
        "name": "Kenya",
        "img": "https://flagcdn.com/w320/ke.png",
        "continent": "Africa",
        "capital": "Nairobi",
        "subregion": "Eastern Africa",
        "area": 580367,
        "population": 53771300
    },
    {
        "id": "BFH",
        "name": "San Marino",
        "img": "https://flagcdn.com/w320/sm.png",
        "continent": "Europe",
        "capital": "City of San Marino",
        "subregion": "Southern Europe",
        "area": 61,
        "population": 33938
    },
    {
        "id": "AXX",
        "name": "French Polynesia",
        "img": "https://flagcdn.com/w320/pf.png",
        "continent": "Oceania",
        "capital": "Papeetē",
        "subregion": "Polynesia",
        "area": 4167,
        "population": 280904
    },
    {
        "id": "CEO",
        "name": "Sierra Leone",
        "img": "https://flagcdn.com/w320/sl.png",
        "continent": "Africa",
        "capital": "Freetown",
        "subregion": "Western Africa",
        "area": 71740,
        "population": 7976985
    }];
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