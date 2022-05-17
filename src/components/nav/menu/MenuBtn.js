import { Link } from "react-router-dom";
import "./menu.css";

export default function MenuBtn({ children, to }) {
  return (
    <button className="menu-btn">
      <Link to={to}>{children.toUpperCase()}</Link>
    </button>
  );
}
