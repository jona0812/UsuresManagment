
import React, { useState } from "react"
import "../styles/users.css";
import Alert from 'react-bootstrap/Alert';
import { Route, Link, useNavigate } from "react-router-dom";
import { CreateUser } from "./CreateUser";
import axios from "axios";
import Routers from "../routes/Routers";


export default function (props) {

    let [authMode, setAuthMode] = useState("signin")
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const [errorLogin, setErrorLogin] = useState(false);


    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin");
    }

    const handleChanges = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const sendInformation = (event) => {

        event.preventDefault();
        axios.post('http://localhost/tienda/backend/login.php', inputs).then((response) => {

            if (response.data.answer === 1) {

                console.log("yeah");

                navigate('/dashboard');

            } else {
                setErrorLogin(true);
                console.log("nuuuuu");
            }
        })
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container App">
                <form className="Auth-form" onSubmit={sendInformation}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                name="email"
                                onChange={handleChanges}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                name="password"
                                onChange={handleChanges}
                            />
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>


                        </div>
                        <p className="text-center mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                        <p>
                            <Link to="/user/create" style={{ textDecoration: 'none' }}>Create user</Link>
                        </p>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <CreateUser />
    )
}