import { Link } from "react-router-dom";
import "./button.css";

export default function Button({ children, className = "", to }) {
  return (
    <Link to={to} className="link">
      <button className={`btn ${className}`.trim()}>{children}</button>
    </Link>
  );
}
