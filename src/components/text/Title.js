import { loremIpsumTitle } from "../../resources/loremIpsum";
import "./text.css";

export default function Title({ text }) {
  const title = text ? text : loremIpsumTitle;
  return <h2 className="title">{title}</h2>;
}
