import s from "./header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
};

export default Header;
