import {Link} from "react-router-dom"

const Navbar = () => {
    return ( 
        <div className="navbar">
            <a href="">Discover</a>
            <a href="">Plans</a>
            <Link to='/signup'>SignUp</Link>
        </div>
     );
}
 
export default Navbar;