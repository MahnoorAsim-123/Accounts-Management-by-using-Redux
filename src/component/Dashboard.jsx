import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../state/action/action";

const Dashboard = () => {

    const dispatch = useDispatch();
    const Navigate = useNavigate();

    // Getting the states from Redux-Store | Obj destructuring
    const {userEmail,userPassword} = useSelector (
        (state) => state.LoginReducer
    );

    const logoutHandler = () => {
        dispatch(logoutAction())
        Navigate("/")
    }

    return (
        <>
            <div className="dashboard">
            <br /><br /><br /><br />
                <h1 className="lightSpeedIn">USER PROFILE</h1>
                <br /><br /><br />
                <h2 className="fadeInUp">EMAIL:</h2>
                <br />
                <h3 className="lightSpeedIn ">{userEmail}</h3>
                <br />
                <h2 className="fadeInUp">PASSWORD:</h2>
                <br />
                <h3 className="lightSpeedIn ">{userPassword}</h3>
                <br /><br /><br />
                <button className="LOGOUT lightSpeedIn" onClick={logoutHandler}>LOGOUT</button>
            </div>
        </>
    )

}

export default Dashboard;