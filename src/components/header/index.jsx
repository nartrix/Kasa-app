import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propros</Link>
        </nav>
    )
}

export default Header;