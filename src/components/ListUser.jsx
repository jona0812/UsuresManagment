import axios from "axios"
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import '../styles/users.css';
import Header from "./header/Header";
import { Footer } from "./footer/Footer";



export function ListUser() {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getUsers();

    }, [])

    function getUsers() {
        axios.get('http://localhost/tienda/backend/index.php').then(function (response) {
            console.log(response.data, "response")

            setUsers(response.data);
        });
    }

    function deleteUser(params) {

        console.log("delete user click", params);
        axios.delete(`http://localhost/tienda/backend/index.php/${params}`).then(response => {
            console.log(response)
            window.location.reload(false);

        }).catch(error => {
            console.log(error, "error  request API");
        })
    }
    return (
        <>
            <Header/>
            <div className="containerListUsers container">
                <Container>
                    <h1 className="titleSection">List users</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Mobile</td>
                                <td>Opciones</td>
                            </tr>
                        </thead>
                        <tbody>

                            {users.map((val, key) =>

                                <tr key={key}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.mobile}</td>
                                    <td>
                                        <Link to={`/user/${val.id}/edit`} style={{ marginRight: "10px" }} > Edit </Link>
                                        <Button variant="primary" size="sm" onClick={() => deleteUser(val.id)}> Delete </Button>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </Container>
            </div>
            <Footer />
        </>
    )
}
