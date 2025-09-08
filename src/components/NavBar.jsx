import { Link } from "react-router-dom";
import '../css/NavBar.css'
function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <p> Movie App </p>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link"> Home </Link>
            <Link to="/notes" className="nav-link">Notes</Link>
        </div>
    </nav>
}
export default NavBar