import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/users.css"



export function CreateUserGuess() {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({})
    const [error, setError] = useState({
        name: false,
        email: false,
        password: false,
        repeat_password: false
    });
    const [notMatch, setNotMatch] = useState(false);

    const handleChanges = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(error.name);

        // validaciones que inputs tenga información y que las contraseñas hagan match
        if (inputs !== '') {
            if (inputs.name === undefined || inputs.name === '') {
                setError((mantenerValores) => ({
                    ...mantenerValores,
                    name: true,
                }))
                return
            } else {
                setError((mantenerValores) => ({
                    ...mantenerValores,
                    name: false,

                }))

            }

            if (inputs.email === undefined || inputs.email === '') {
                setError((mantenerValores) => ({
                    ...mantenerValores,
                    email: true,
                }))
                return
            } else {
                setError((mantenerValores) => ({
                    ...mantenerValores,
                    email: false
                }))

            }

            if (inputs.password === undefined || inputs.password === '') {
                setError(mantenerValores => ({
                    ...mantenerValores,
                    password: true
                }))
                return
            } else {
                setError(mantenerValores => ({
                    ...mantenerValores,
                    password: false
                }))

            }
            // validación contraseñas match
            if (inputs.password !== inputs.repeat_password) {

                setNotMatch(true)
                return

            } else {

                setNotMatch(false)

            }

            axios.post('http://localhost/tienda/backend/index.php', inputs).then((response) => {
                console.log("respuesta", response);
                navigate('/listUsers');
            });
        }

    }
    return (
        <>
            <div className="container containerSave">
                <h1 className="titleSection">  Create users</h1>
                <form action="" onSubmit={handleSubmit}>

                    <div className="saveUser">
                        <label htmlFor="">
                            <strong> Name: </strong>
                        </label>
                        <input className="form-control form-control-sm" style={{ borderColor: error.name ? 'red' : '' }} type="text" name="name" onChange={handleChanges} />
                        {error.name && <p style={{ color: 'red' }}>Por favor, ingrese el nombre.</p>}

                        <label htmlFor="">
                            <strong> E-mail: </strong>
                        </label>
                        <input className="form-control form-control-sm" style={{ borderColor: error.email ? 'red' : '' }} type="text" name="email" onChange={handleChanges} />
                        {error.email && <p style={{ color: 'red' }}>Por favor, ingrese el E-mail.</p>}

                        <label>
                            <strong> Password: </strong>
                        </label>

                        <input className="form-control form-control-sm" style={{ borderColor: error.password ? 'red' : '', borderColor: notMatch ? 'red' : '' }} type="password" name="password" onChange={handleChanges} />
                        {error.password && <p style={{ color: 'red' }}>Por favor, ingrese la contraseña.</p>}


                        <label>
                            <strong> Repeat-password: </strong>
                        </label>

                        <input className="form-control form-control-sm" style={{ borderColor: error.password ? 'red' : '', borderColor: notMatch ? 'red' : '' }} type="password" name="repeat_password" onChange={handleChanges} />
                        {error.password && <p style={{ color: 'red' }}>Por favor, repita la contraseña.</p>}
                        {notMatch && <p style={{ color: 'red' }}>Las contraseñas no coinciden.</p>}


                        <label htmlFor="">
                            <strong> Mobile: </strong>
                        </label>
                        <input className="form-control form-control-sm movileInput" type="text" name="mobile" onChange={handleChanges} id="mobile" />

                        <div>
                            <button type="submit" className="btn btn-sm btn-primary btn-save" >Save</button>
                        </div>
                    </div>
                </form>

            </div> 
        </>
    )
}