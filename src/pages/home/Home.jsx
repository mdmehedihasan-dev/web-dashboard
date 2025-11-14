import React, { useEffect, useState } from "react";
import AosWrapper from "../../Components/homeComponents/AosWrapper";
import Hero from "../../Components/homeComponents/Hero";
import BookNow from "../../Components/homeComponents/BookNow";
import Companies from "../../Components/homeComponents/Companies";
import FormFilter from "../../Components/homeComponents/FormFilter";
import HowItWorks from "../../Components/homeComponents/HowItWorks";
import WhyChooseUs from "../../Components/homeComponents/WhyChooseUs";
import Reviews from "../../Components/homeComponents/Reviews";
import Faqs from "../../Components/homeComponents/Faqs";
import Couriers from "../../Components/homeComponents/Couriers";

const Home = () =>{
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleClick = () => {
    const target = document.getElementById("booking-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="">
      <AosWrapper>
        <div>
          <Hero/>
          <FormFilter/>
          <BookNow/>
          <HowItWorks/>
          <Companies/>
          <Reviews/>
          <WhyChooseUs/>
          <Faqs/>
          <Couriers/>
        </div>
      </AosWrapper>
      {showButton && (
        <div>
          <button
            onClick={handleClick}
            className="px-6 py-4 rounded-xl bg-[var(--primary-color)] hover:bg-[var(--text-color)] font-bold text-black text-[16px]  flex items-center justify-between gap-3 fixed bottom-3 z-[9] left-1/2 -translate-x-1/2 hover:text-white"
          >
            Bekijk de prijs en boek transport
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;

