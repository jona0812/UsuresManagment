import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/users.css"
import { Footer } from "./footer/Footer";
import Header from "./header/Header";


export function CreateUser() {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({})

    const handleChanges = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)

        axios.post('http://localhost/tienda/backend/index.php', inputs).then((response) => {
            console.log("respuesta", response);
            navigate('/listUsers');
        });

    }
    return (
        <>
            <Header />
            <div className="container containerSave">
                <h1 className="titleSection">  Create users</h1>
                <form action="" onSubmit={handleSubmit}>

                    <div className="saveUser">
                        <label htmlFor="">
                            <strong> Name: </strong>
                        </label>
                        <input className="form-control form-control-sm" type="text" name="name" onChange={handleChanges} />

                        <label htmlFor="">
                            <strong> E-mail: </strong>
                        </label>
                        <input className="form-control form-control-sm" type="text" name="email" onChange={handleChanges} />

                        <label>
                            <strong> Password: </strong>
                        </label>

                        <input className="form-control form-control-sm" type="password" name="password" onChange={handleChanges} />

                        <label htmlFor="">
                            <strong> Mobile: </strong>
                        </label>
                        <input className="form-control form-control-sm movileInput" type="text" name="mobile" onChange={handleChanges} />
                        <div>
                            <button type="submit" className="btn btn-sm btn-primary btn-save" >Save</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}