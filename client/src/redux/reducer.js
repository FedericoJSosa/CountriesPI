import { GET_COUNTRIES, GET_COUNTRY, CLEAN, CURRENT_PAGE, ACTIVITIES_ACTU  } from "./actionType";

const initialState={
    country:[],
    countryId:[],
    currentPage: 1,
    pageSize: 10,
};



const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_COUNTRIES:
            return {...state, country: action.payload} 

        case GET_COUNTRY:
            return{...state, countryId: action.payload};

        case CLEAN:
            return{...state, countryId:[]};

        case CURRENT_PAGE:
            return{...state, currentPage: action.payload}
     

        default:
            return {...state}
    }
}


export default rootReducer;