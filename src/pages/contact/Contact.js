import { useEffect } from "react";
import Form from "../../components/form/Form";
import Spacer from "../../components/Spacer";
import Paragraphs from "../../components/text/Paragraph";
import Title from "../../components/text/Title";
import "./contact.css";
export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="contact">
      <div className="contact-content">
        <section className="contact-copy">
          {window.innerWidth > 390 && <Spacer />}
          <Title text="Contact Us" />
          <Paragraphs bold half />
          <Form />
        </section>
        {window.innerWidth > 390 && <div className="contact-img" />}
      </div>
    </main>
  );
}
