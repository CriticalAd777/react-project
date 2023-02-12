import { NavLink } from "react-router-dom"

export const Layout:React.FC = () => {
    return <div>
        <nav>
            <ul className="navigator-list">

                <li className="navigator-item">
                    <NavLink to="/">Home</NavLink>
                </li>

                <li className="navigator-item">
                    <NavLink to="/Costumers">Costumers</NavLink>
                </li>

                <li className="navigator-item">
                    <NavLink to="/orders">Orders</NavLink>
                </li>

                <li className="navigator-item">
                    <NavLink to="/products">Products</NavLink>
                </li>

            </ul>
        </nav>
    </div>
}