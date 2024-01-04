import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryId, clean } from "../../redux/actions";
import { Link } from "react-router-dom";
import style from "./Detail.module.css"

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
            <div className={style.container}>
                <div className={style.Detail}>
                    <p className={style.p}>ID: {countryId.id}</p>
                    <p>Name: {countryId.name}</p>
                    <img src={countryId.img} alt="Not found" className={style.img} />
                    <p>Continent: {countryId.continent}</p>
                    <p>Capital: {countryId.capital}</p>
                    <p>SubRegion: {countryId.subregion}</p>
                    <p>Area: {countryId.area}</p>
                    <p>Population: {countryId.population}</p>
                    <p>Activities: {countryId.Activities.length != 0 ?
                        countryId.Activities.map(activity => activity.name).join(", ") :
                        "No activities have been assigned yet"}</p>

                </div>
                <Link to="/home"><button className={style.button}>Home</button></Link>


            </div>
        )
    } else {
        return <p>Loading...</p>
    }
};


export default Detail;