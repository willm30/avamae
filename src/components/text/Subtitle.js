import { loremIpsumSubtitle } from "../../resources/loremIpsum";
import "./text.css";

export default function Subtitle() {
  return <h3 className="subtitle">{loremIpsumSubtitle}</h3>;
}
