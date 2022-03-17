import ActionType from "../constant";

// Current State
const INITIAL_STATE = {
    userEmail : "",
    userPassword : ""
};

// Reducer is a function which defines the functionality(how to do)
const LoginReducer = ( state = INITIAL_STATE , action ) => {

    if(action.type === ActionType.isLogin){
        return{
            ...state,
            userEmail : action.payload.email,
            userPassword : action.payload.pass
        };   
    }else if(action.type === ActionType.isLogout){
        return{
            ...state,
            userEmail : "",
            userPassword : ""
        }
    }
    
    else{
        return state;
    }

};

export {LoginReducer};