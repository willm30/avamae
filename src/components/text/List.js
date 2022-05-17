import { loremIpsumSentence } from "../../resources/loremIpsum";

export default function List({ num }) {
  return (
    <ul className="list">
      {[...Array(num).keys()].map((i) => (
        <li key={`li${i}`} className="list-item">
          <span>{loremIpsumSentence}</span>
        </li>
      ))}
    </ul>
  );
}
