import axios from "axios";
import { GET_COUNTRIES, GET_COUNTRY, CLEAN, CURRENT_PAGE, CHANGE_CURRENT_COUNTRIES } from "./actionType";

const getCountries = () => {
    return async (dispatch) => {
        const countriesData = await axios.get("http://localhost:3001/countries");
        const country = countriesData.data.data;
        dispatch(
            {
                type: GET_COUNTRIES,
                payload: country
            }
        )

    }
};

const getCountryId = (id) => {
    return async (dispatch) => {
        const countriesData = await axios.get(`http://localhost:3001/countries/${id}`);
        const countryId = countriesData.data.data;
        dispatch(
            {
                type: GET_COUNTRY,
                payload: countryId
            }
        )

    }
};

const pageChange = (currentPage) => {
    return (dispatch) => {
        dispatch(
            {
                type: CURRENT_PAGE,
                payload: currentPage
            }
        )
    }
};

const countriesTotalCount = (countriesCount) => {
    return (dispatch) => {
        dispatch(
            {
                type: CHANGE_CURRENT_COUNTRIES,
                payload: countriesCount
            }
        )
    }
};

const clean = () => {
    return { type: CLEAN }
};



export {
    getCountries,
    getCountryId,
    clean,
    pageChange,
    countriesTotalCount
}