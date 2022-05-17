import "./nav.css";
import { ReactComponent as Logo } from "./Logo.svg";
import { Link } from "react-router-dom";
import NavMenu from "./menu/Menu";
export default function Nav() {
  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      {window.innerWidth > 390 && <NavMenu />}
    </nav>
  );
}
