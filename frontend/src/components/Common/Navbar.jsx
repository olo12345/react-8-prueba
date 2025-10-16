import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./../../store/CartContext.jsx";
import { UserContext } from "./../../store/UserContext.jsx";

function Navbar() {
    const setActiveClass = ({isActive}) => isActive ? "active" : undefined;
    const {total} = useContext(CartContext);
    const { logout, token } = useContext(UserContext);

    return (
        <nav className="bg-gray-800 flex p-4 text-white">
            <h1 className="font-bold">Pizzería Mamma Mía</h1>
            <div className="mr-auto flex ml-4 space-x-4">
                <NavLink className={setActiveClass} to="/">Home</NavLink>
                {token ? <NavLink className={setActiveClass} to ="/profile">Profile</NavLink> : <NavLink className={setActiveClass} to="/login">Login</NavLink>}
                {token ? <Link onClick={logout} >Logout</Link> : <NavLink className={setActiveClass} to="/register">Register</NavLink>}
                <NavLink className={setActiveClass} to="/cart">Total: ${total.toLocaleString("es-CL")}</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;