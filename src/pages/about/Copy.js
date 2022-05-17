import List from "../../components/text/List";
import Paragraphs from "../../components/text/Paragraph";
import Title from "../../components/text/Title";
import img from "../../images/about-us.jpg";

export default function Copy() {
  return (
    <>
      <Paragraphs bold />
      <Paragraphs />
      <img className="about-img" src={img} alt="Our beautiful office" />
      <Paragraphs />
      <Title />
      <List num={4} />
      <Paragraphs nums={2} />
    </>
  );
}
