import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Create from "./Create/Create";
import Driving from "./Create/Driving/Driving";
import DrivingForm from "../Components/Driving/DrivingForm";
import Services from "./Create/Services/Services";
import Seller from "./Create/Seller/Seller";
import MoreInfo from "./Create/Seller/MoreInfo";
import SignIn from "../Components/SignInPage/SignIn";

const CRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/create/driving" element={<Driving />} />
      <Route path="/create/driving/:type" element={<DrivingForm />} />
      <Route path="/create/services" element={<Services />} />
      <Route path="/create/seller" element={<Seller />} />
      <Route path="/create/seller/moreinfo" element={<MoreInfo />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default CRoutes;
