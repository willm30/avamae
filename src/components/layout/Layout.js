import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import "./layout.css";
import Footer from "../Footer";

export default function Layout() {
  return (
    <div className="layout">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
