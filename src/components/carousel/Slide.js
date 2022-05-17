import Button from "../Button";
import "./slide.css";

export default function Slide({ d }) {
  const { Title: title, ImageUrl: url, Subtitle: sub } = d;

  // Custom resizing of third image in carousel
  let objectPosition;
  if (url.includes("3") && window.innerWidth > 390)
    objectPosition = "-25px -97px";

  return (
    <div className="slide">
      <div className="slide-img-cont">
        <img
          src={url}
          alt={`Image titled ${title}`}
          style={{ objectPosition }}
        />
      </div>
      <div className="slide-text-wrapper">
        <h2>{title}</h2>
        <h3>{sub}</h3>
        <Button to="contact-us">Contact Us</Button>
      </div>
    </div>
  );
}
