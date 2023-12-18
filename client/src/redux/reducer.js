import { GET_COUNTRIES, GET_COUNTRY, CLEAN } from "./actionType";

const initialState={
    country:[],
    countryId:[]
};

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_COUNTRIES:

            return {...state, country: action.payload};

        case GET_COUNTRY:

            return{...state, countryId: action.payload};

        case CLEAN:
            return{...state, countryId:[]};

        default:
            return {...state}
    }
}


export default rootReducer;