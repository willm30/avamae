import { loremIpsumP } from "../../resources/loremIpsum";
import "./text.css";

export default function Paragraphs({ nums = 1, bold, half }) {
  let classBold = bold ? "bold" : "";
  const len = loremIpsumP.length;
  return [...Array(nums).keys()].map((i) => (
    <p key={`p${i}`} className={`copy ${classBold}`}>
      {half ? loremIpsumP.slice(0, len / 2) : loremIpsumP}
    </p>
  ));
}
