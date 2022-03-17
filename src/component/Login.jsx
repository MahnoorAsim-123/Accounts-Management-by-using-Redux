import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../App.css';
import Logo from "../assets/logo.png"
import { loginAction } from "../state/action/action";


const UserLogin = () => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const Navigate = useNavigate();
    const dispatch = useDispatch();


    // LoginHandler
    const LoginHandler = () => {

        dispatch(loginAction({
            email,
            pass
        }));

        console.log(dispatch);

        
        // Clear Form Fields
        setEmail("")
        setPass("")


        // Redirect
        Navigate("/dashboard");

    }


    return (
        <>
            <div className="myContainer">
                <div className="logo">
                   <img src={Logo} alt="logo"  />
                </div>
                    <div className="myform ">
                        <h1>Welcome to Login!</h1>
                        <input
                            type="email"
                            value={email}
                            placeholder="ENTER YOUR EMAIL"
                            onChange={(name) => setEmail(name.target.value)}
                        />
                        <br />
                        <input
                            value={pass}
                            type="password"
                            placeholder="ENTER YOUR PASSWORD"
                            onChange={(pswd) => setPass(pswd.target.value)}
                        />
                        <br />
                        <button className="loginBtn" onClick={LoginHandler}>LOGIN</button>

                        <br /><br />

                        <div className="next">
                            <p className="redirectPage">I don't have an account?&nbsp;
                                <span className="Log" >Signup here</span>
                            </p>
                        </div>
                    </div>

            </div>

        </>
    )
};


export default UserLogin;