import Button from "../../../components/Button";
import Paragraphs from "../../../components/text/Paragraph";
import Subtitle from "../../../components/text/Subtitle";
import Title from "../../../components/text/Title";
import "./contact.css";
export default function ContactUs() {
  return (
    <section className="hm-contact">
      <div className="hm-contact-title-wrapper">
        <Title />
        <Subtitle />
      </div>
      <div className="hm-contact-copy-wrapper">
        <Paragraphs bold />
        <Paragraphs nums={2} />
      </div>
      <Button to="contact-us">Contact Us</Button>
    </section>
  );
}
