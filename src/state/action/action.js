import ActionType from "../constant";

const loginAction = (value) => {

    // return takes a callback function.
    return (dispatch) => {

        dispatch({

            type : ActionType.isLogin,

            payload : value
        });

    };

};



const logoutAction = () => {

    // return takes a callback function.
    return (dispatch) => {

        dispatch({

            type : ActionType.isLogout,

        });

    };

};

export {loginAction , logoutAction};