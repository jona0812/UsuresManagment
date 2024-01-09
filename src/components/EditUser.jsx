import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./header/Header";
import { Footer } from "./footer/Footer";

export function EditUser() {

    const [users, setUsers] = useState([]);
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

                        <input className="form-control form-control-sm" type="text" name="name" onChange={handleChanges} value={users.name} />

                        <label htmlFor=""><strong> Email: </strong>: </label>

                        <input className="form-control form-control-sm" type="text" name="email" onChange={handleChanges} value={users.email} />

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
