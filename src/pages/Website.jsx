import React from "react";
import Hero from "../components/Hero/Hero";
import Service from "../components/Service/Service";
import GetStarted from "../components/GetStarted/GetStarted";
import HowITWorks from "../components/HowITWorks/HowITWorks";
import FQA from "../components/FQA/FQA";
import SendMoney from "../components/SendMoney/SendMoney";
import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      <AboutUs />
      <Service />
      <HowITWorks />
      <GetStarted />
      <SendMoney />
      <FQA />
      <Footer />
    </div>
  );
};

export default Website;
