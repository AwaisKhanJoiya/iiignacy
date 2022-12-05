import React, { useState } from "react";
import Navbar from "./Navbar";
import HomeBody from "./HomeBody";
import Meet from "./Meet";
import "./estate.css";
import Testimonial from "./Testimonial";
import Footer from "../Footer";
import News from "./News";
import Listings from "./Listings";
import Buy from "./Buy";
import Sell from "./Sell";
import LeadingEdge from "./LeadingEdge";
const RealEstate = () => {
  const [selected, setSelected] = useState("homebody");
  return (
    <>
      <Navbar setSelected={setSelected} />
      {selected === "homebody" && <HomeBody setSelected={setSelected} />}
      {selected === "meet" && <Meet setSelected={setSelected} />}
      {selected === "testimonial" && <Testimonial setSelected={setSelected} />}
      {selected === "news" && <News setSelected={setSelected} />}
      {selected === "listings" && <Listings setSelected={setSelected} />}
      {selected === "buy" && <Buy setSelected={setSelected} />}
      {selected === "sell" && <Sell setSelected={setSelected} />}
      {selected === "leading" && <LeadingEdge setSelected={setSelected} />}
      <Footer />
    </>
  );
};

export default RealEstate;
