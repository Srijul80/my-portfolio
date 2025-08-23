import React from "react";
import NavbarMain from "./Components/Navbar/NavbarMain";
import HeroMain from "./Components/HeroSection/HeroMain";
import AboutMeMain from "./Components/AboutMeSection/AboutMeMain";
import SkillMain from "./Components/SkillsSection/SkillMain";
import ProjectsMain from "./Components/ProjectsSection/ProjectsMain";
import ContactMeMain from "./Components/ContactMeSection/ContactMeMain";
import FooterMain from "./Components/Footer/FooterMain";
import CertificateMain from "./Components/CefrtificateSection/CertificateMain";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <main className="font-body max-w-[1300px] mx-auto w-full ">
        <NavbarMain />
        <HeroMain />
        <AboutMeMain />
        <SkillMain />
        <CertificateMain />
        <ProjectsMain />
        <ContactMeMain />
        <FooterMain />
      </main>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
};

export default App;
