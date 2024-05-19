import React, { useState } from "react";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import { ContactUs } from "./Components/ContactUs";
import Subscription from "./Components/Subscription";
import SubSection from "./Components/SubSection";

const App = () => {
  const [nav, setNav] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    weight: "",
    height: "",
    goal: "",
    membresia: "",
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
  };

  window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 405) {
      setNav(true);
    } else {
      setNav(false);
    }
  });

  return (
    <div className="App">
      <Nav nav={nav} toggleModal={toggleModal} />
      <HeroSection toggleModal={toggleModal} />
      <About />
      <Gallery />
      <SubSection
        toggleModal={toggleModal}
        formData={formData}
        setFormData={setFormData}
      />
      <Subscription
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        formData={formData}
        setFormData={setFormData}
      />
      <ContactUs />
      <Footer nav={nav} />
    </div>
  );
};

export default App;
