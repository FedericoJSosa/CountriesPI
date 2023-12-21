import { GET_COUNTRIES, GET_COUNTRY, CLEAN, CURRENT_PAGE, FILTER, PAGE_ORDER, CRITERIA  } from "./actionType";

const initialState={
    country:[],
    countryId:[],
    currentPage: 1,
    pageSize: 10,
    filter:"",
    order:"",
    criteria:""
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

        case FILTER:
            return{...state, filter: action.payload}
        
        case PAGE_ORDER:
            return{...state, filter: action.payload} 

        case CRITERIA:
            return{...state, filter: action.payload}

        default:
            return {...state}
    }
}


export default rootReducer;