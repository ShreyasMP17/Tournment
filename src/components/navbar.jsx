import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="name">
                <img src="./images/logo.svg" height="40" width="70" alt="" />
            </div>
            <div className="list">
                <Link id="one" to="/" > <b>  HOME  </b> </Link>
                <Link to="/tournments"><b>TOURNMENTS</b> </Link>
                <Link to="/partcipants"><b>PARCIPANTS</b></Link>
                <Link to="/"><b>LOGOUT</b></Link>
            </div>
        </div>
     );
}
 
export default Navbar;