import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="error-404">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link className="error-link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error404;
