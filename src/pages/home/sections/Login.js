import Button from "../../../components/Button";
import Paragraphs from "../../../components/text/Paragraph";
import Title from "../../../components/text/Title";
import "./login.css";

export default function Login() {
  return (
    <section className="hm-login">
      <div className="hm-login-overlay">
        <Title />
        <Paragraphs />
        <Button to="" className="btn-white login-btn">
          Log In
        </Button>
      </div>
    </section>
  );
}
