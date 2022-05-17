import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import getImgs from "./services/getImages";

export default function App() {
  // Store images in app memory to prevent multiple requests
  // when switching between pages.
  const [imgs, setImgs] = useState();

  useEffect(() => {
    getImgs(setImgs);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<Home {...{ imgs }} />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
