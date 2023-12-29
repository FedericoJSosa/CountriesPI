import { GET_COUNTRIES, GET_COUNTRY, CLEAN, CURRENT_PAGE, CHANGE_CURRENT_COUNTRIES  } from "./actionType";

const initialState={
    country:[],
    countryId:[],
    currentPage: 1,
    pageSize: 10,
    currentCountries: 250
};



const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_COUNTRIES:
            return{...state, country: action.payload} 

        case GET_COUNTRY:
            return{...state, countryId: action.payload};

        case CLEAN:
            return{...state, countryId:[]};

        case CURRENT_PAGE:
            return{...state, currentPage: action.payload}

        case CHANGE_CURRENT_COUNTRIES:
            return{...state, currentCountries: action.payload}

        default:
            return {...state}
    }
}


export default rootReducer;