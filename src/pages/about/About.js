import { useEffect } from "react";
import Spacer from "../../components/Spacer";
import Paragraphs from "../../components/text/Paragraph";
import List from "../../components/text/List";
import Title from "../../components/text/Title";
import "./about.css";
import Copy from "./Copy";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="about">
      <section className="about-content">
        {window.innerWidth > 390 && <Spacer />}
        <Title text="About Us" />
        <Copy />
        {window.innerWidth > 390 && <Spacer />}
      </section>
    </main>
  );
}
