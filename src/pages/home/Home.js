import Carousel from "../../components/carousel/Carousel";
import "./home.css";
import Spacer from "../../components/Spacer";
import LearnMore from "./sections/LearnMore";
import Login from "./sections/Login";
import ContactUs from "./sections/ContactUs";

export default function Home({ imgs }) {
  return (
    <main className="home">
      <Carousel {...{ imgs }}></Carousel>
      <LearnMore />
      <Login />
      <ContactUs />
      <Spacer />
    </main>
  );
}
