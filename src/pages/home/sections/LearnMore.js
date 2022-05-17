import aboutUs from "../../../images/about-us.jpg";
import Title from "../../../components/text/Title";
import List from "../../../components/text/List";
import Button from "../../../components/Button";
import Paragraphs from "../../../components/text/Paragraph";
import "./learn.css";
export default function LearnMore() {
  return (
    <section className="hm-learn">
      <div className="hm-learn-img-cont">
        <img src={aboutUs} alt="Our beautiful office." />
      </div>
      <div className="hm-learn-text-wrapper">
        <Title />
        <Paragraphs />
        <List num={4} />
        <Button to="about-us" className="btn">
          Learn More
        </Button>
      </div>
    </section>
  );
}
