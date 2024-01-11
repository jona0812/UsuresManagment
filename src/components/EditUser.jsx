import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./header/Header";
import { Footer } from "./footer/Footer";

export function EditUser() {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState({
        name: false,
        email: false,
        password: false,
        repeat_password: false
    });
    const [notMatch, setNotMatch] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {

        getUsers()

    }, [])

    function getUsers() {
        axios.get(`http://localhost/tienda/backend/index.php/${id}`).then(function (response) {
            console.log(response.data, "response");
            setUsers(response.data);
        });
    }

    function handleChanges(event) {

        const name = event.target.name;
        const value = event.target.value;
        setUsers(values => ({ ...values, [name]: value }));

    }

    function handleSubmit(event) {

        event.preventDefault();

        if (users !== '') {
            if (users.name === undefined || users.name === '') {
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
            if (users.email === undefined || users.email === '') {
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

            const inputPassword = document.getElementById('password').value;
            // console.log(inputPassword, 'userssesss')

            if (inputPassword !== '') {                

                if (users.password === undefined || users.password === '') {
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
                if (users.password !== users.repeat_password) {

                    setNotMatch(true)
                    return

                } else {

                    setNotMatch(false)

                }

            }
        }

        // working don't touch
        axios.put(`http://localhost/tienda/backend/index.php/${id}`, users).then(function (response) {
            setUsers(response.data);
            navigate('/listUsers')

        }).catch(error => {

            console.log(error, "error")
        });

    }

    function cancel() {

        navigate('/listUsers');

    }

    return (
        <>
            <Header />
            <div className="container containerSave">

                <h1 className="titleSection">Edit user {users.name}</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className="saveUser">

                        <label htmlFor=""><strong> Name: </strong></label>

                        <input className="form-control form-control-sm" style={{ borderColor: error.name ? 'red' : '' }} type="text" name="name" onChange={handleChanges} value={users.name} />
                        {error.name && <p style={{ color: 'red' }}>Por favor, ingrese el nombre.</p>}

                        <label htmlFor=""><strong> Email: </strong>: </label>

                        <input className="form-control form-control-sm" style={{ borderColor: error.email ? 'red' : '' }} type="text" name="email" onChange={handleChanges} value={users.email} />
                        {error.email && <p style={{ color: 'red' }}>Por favor, ingrese el E-mail.</p>}
                        <h4>Para actualizar la contraseña es necesario que llenes los dos campos, de lo contrario no lo llenes.</h4>
                        <label>
                            <strong> Password: </strong>
                        </label>

                        <input className="form-control form-control-sm" style={{ borderColor: error.password ? 'red' : '', borderColor: notMatch ? 'red' : '' }} type="password" name="password" onChange={handleChanges} id="password"/>
                        {error.password && <p style={{ color: 'red' }}>Por favor, ingrese la contraseña.</p>}

                        <label>
                            <strong> Repeat-password: </strong>
                        </label>
                        <input className="form-control form-control-sm" style={{ borderColor: error.password ? 'red' : '', borderColor: notMatch ? 'red' : '' }} type="password" name="repeat_password" onChange={handleChanges} />
                        {error.password && <p style={{ color: 'red' }}>Por favor, repita la contraseña.</p>}
                        {notMatch && <p style={{ color: 'red' }}>Las contraseñas no coinciden.</p>}

                        <label htmlFor=""><strong> Mobile: </strong> </label>

                        <input className="form-control form-control-sm" type="text" name="mobile" onChange={handleChanges} value={users.mobile} />

                        <button type="submit" className="btn btn-sm btn-primary">Edit</button>
                        <button type="submit" className="btn btn-sm btn-danger" onClick={cancel}>Cancel</button>
                    </div>

                </form>
            </div>
            <Footer />
        </>
    )
}
