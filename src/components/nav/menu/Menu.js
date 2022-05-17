import MenuBtn from "./MenuBtn";
import "./menu.css";

export default function NavMenu() {
  return (
    <div className="nav-menu">
      <MenuBtn to="/">Home</MenuBtn>
      <MenuBtn to="about-us">About Us</MenuBtn>
      <MenuBtn to="contact-us">Contact Us</MenuBtn>
      <button className="login-btn">Log in</button>
    </div>
  );
}
