import axios from "axios";
import { GET_COUNTRIES, GET_COUNTRY, CLEAN } from "./actionType";

const getCountries=()=>{
    return async(dispatch)=>{
        const countriesData= await axios.get("http://localhost:3001/countries");
        const country=countriesData.data.data;
        dispatch(
            {type: GET_COUNTRIES, 
            payload: country}
            )

    }
};

const getCountryId=(id)=>{
    return async(dispatch)=>{
        const countriesData= await axios.get(`http://localhost:3001/countries/${id}`);
        const countryId=countriesData.data.data;
        console.log(countryId);
        dispatch(
            {type: GET_COUNTRY, 
            payload: countryId}
            )

    }
};

const clean=()=>{
    return {type: CLEAN}
    
}

export{
    getCountries,
    getCountryId,
    clean,
}