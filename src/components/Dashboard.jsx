import { Link,useLocation } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header/Header";
import { Footer } from "./footer/Footer";
import ReactPlayer from "react-player";
import video from "../assets/video/landing.mp4";

function Dashboard() {


    const number = window.location.href;
    const {state} =useLocation();


    return (
        <>

            <Header />
            <div className="App container">
                <ReactPlayer url={video} className='video' controls loop  width='70%' height='60%' playing/> 

                {/* <nav style={{ textAlign: 'center' }}>
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
                </nav> */}
            </div>
            <Footer />
        </>
    )
}

export default Dashboard;