import { Link } from "react-router-dom";
import Logo from "../../asset/logo.png";

function Header() {
  return (
    <nav className="header">
      <img src={Logo} alt="Logo" />
      <div className="nav">
        <Link className="nav-link" to="/">
          ACCUEIL
        </Link>
        <Link className="nav-link" to="/about">
          A PROPOS
        </Link>
      </div>
    </nav>
  );
}

export default Header;
