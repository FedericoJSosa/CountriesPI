import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryId, clean } from "../../redux/actions";

const Detail = () => {
    const { id } = useParams();
    const countryId = useSelector(state => state.countryId);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountryId(id));
        return () => {
            dispatch(clean())
        }
    }, [id])


    if (countryId.Activities) {

        return (
            <div>
                <h1>Soy Detail</h1>
                <p>ID: {countryId.id}</p>
                <p>Name: {countryId.name}</p>
                <img src={countryId.img} alt="Not found" />
                <p>Continent: {countryId.continent}</p>
                <p>Capital: {countryId.capital}</p>
                <p>SubRegion: {countryId.subregion}</p>
                <p>Area: {countryId.area}</p>
                <p>Population: {countryId.population}</p>
                <p>Activities: {countryId.Activities.length !=0 ? 
                countryId.Activities.map(activity => activity.name).join(", "):
                "No activities have been assigned yet"}</p>
            
            </div>
        )
    } else {
        return <p>Loading...</p>
    }
};


export default Detail;