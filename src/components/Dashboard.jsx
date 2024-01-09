import { Link } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header/Header";
import { Footer } from "./footer/Footer";


function Dashboard() {


    const number = window.location.href;

    console.log(number);

    return (
        <>

            <Header />
            <div className="App container">
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>

                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>
                <h3 className="mainTitle">React CRUD operations using PHP AND MySQL</h3>

                <nav style={{ textAlign: 'left' }}>
                    <ul>
                        <li>
                            <h6>User managment</h6>
                        </li>
                        <li>
                            <Link to="/listUsers" style={{ textDecoration: 'none' }}>List users</Link>
                        </li>
                        <li>
                            <Link to="/user/create" style={{ textDecoration: 'none' }}>Create user</Link>
                        </li>
                        <li>
                            <Link to="" style={{ textDecoration: 'none' }} title="You'd go list and select user to edit">Edit user</Link>
                        </li>
                        <li>
                            <Link to="/" style={{ textDecoration: 'none' }} title="You'd go list and select user to edit">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard;