import React from "react";
import Hero from "../components/Hero";
import About from "../pages/About";
import Footer from "../components/Footer";
import Contact from "./Contact";
import Services from "./Services";
// import CustomerFeedback from "./CustomerFeedback";

const Home = () => {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div>
        <Services/>
      </div>
      {/* <div>
        <CustomerFeedback/>
             </div> */}
             <div id="contact">
              <Contact/>
             </div>
      <div>
        <Footer/>
      </div>

    
    </>
  );
};

export default Home;
