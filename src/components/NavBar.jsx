import { Link } from "react-router-dom";
import '../css/NavBar.css'
function NavBar(){
    return <nav className="fixed top-0 left-0 z-[1000] w-full flex flex-row justify-between overflow-hidden bg-[#e3aedD] text-black font-medium">
        <div className="text-center py-[14px] px-[20px]">
            <p> Movie App </p>
        </div>
        <div className="py-[14px] px-[20px] flex gap-[15px]">
            <Link to="/" className="py-[15px] px-[15px]"> Home </Link>
            <Link to="/notes" className="py-[15px] px-[15px]">Notes</Link>
        </div>
    </nav>
}
export default NavBar