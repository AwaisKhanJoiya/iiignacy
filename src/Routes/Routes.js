import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Create from "./Create/Create";
import Driving from "./Create/Driving/Driving";
import DrivingForm from "../Components/Driving/DrivingForm";
import Services from "./Create/Services/Services";
import Seller from "./Create/Seller/Seller";
import MoreInfo from "./Create/Seller/MoreInfo";
import SignIn from "../Components/CreateSeller/SignIn/SignIn";
import SignPage from "../Components/SignInPage/SignPage";
import Pbutton from "../Components/2p/Pbutton";
import LoginForm from "../Components/SignInPage/FreelanceServices/LoginForm/LoginForm";
import SignUpForm from "../Components/SignInPage/SignUp/SignUpForm";
import Freelancer from "../Components/SignInPage/FreelanceServices/Freelancer";
import Fleetowner from "../Components/2p/Fleetowner/Fleetowner";
import FleetBtns from "../Components/2p/Fleetowner/FleetBtns";
import Driver from "../Components/2p/2pDriver/Driver";
import QuizForm from "../Components/2p/2pDriver/CharacterForm/QuizForm";
import RegistrationForm from "../Components/2p/Fleetowner/RegistrationForm/RegistrationForm";
import CreateFleetOwner from "../Components/2p/Fleetowner/RegistrationForm/CreateFleetOwner";
import CompletedForm from "../Components/2p/Fleetowner/CompleteForm/CompletedForm";
import DeliveryDriver from "../Components/2p/DeliveryDriver/DeliveryDriver";
import CreateCarDelivery from "../Components/2p/DeliveryDriver/ByCar/CreateCarDelivery";
import CreateScooterDelivery from "../Components/2p/DeliveryDriver/ByScooter/CreateScooterDelivery";
import CreateBycylce from "../Components/2p/DeliveryDriver/Bycycle/CreateBycylce";
import CreateVerification from "./Create/Seller/VerificationSeller/CreateVerification";
import WelcomePage from "./Create/Seller/VerificationSeller/WelcomePage";
import TaxInfo from "./Create/Seller/VerificationSeller/TaxInfo";
import SorryForm1 from "./Create/Seller/VerificationSeller/SorryForm1";
import SorryForm2 from "./Create/Seller/VerificationSeller/SorryForm2";
import RealEstate from "./Home/RealEstate/RealEstate";

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
      <Route path="/signinpage" element={<SignPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/freelancer" element={<Freelancer />} />
      {/* 2p and fleetOwner Routes  */}
      <Route path="/pbutton" element={<Pbutton />} />
      <Route path="/pbutton/fleetowner" element={<Fleetowner />} />
      <Route path="/fleetowner/fleetbtns" element={<FleetBtns />} />
      <Route path="/registration" element={<RegistrationForm />} />
      <Route path="/driver" element={<Driver />} />
      <Route path="/quizform" element={<QuizForm />} />
      <Route path="/createfleet" element={<CreateFleetOwner />} />
      <Route path="/complete" element={<CompletedForm />} />
      {/* Delivery Driver  */}
      <Route path="/delivery" element={<DeliveryDriver />} />
      <Route path="/car" element={<CreateCarDelivery />} />
      <Route path="/scooter" element={<CreateScooterDelivery />} />
      <Route path="/bycycle" element={<CreateBycylce />} />
      {/* Seller  */}
      <Route path="/verification" element={<CreateVerification />} />
      <Route path="/sorry1" element={<SorryForm1 />} />
      <Route path="/sorry2" element={<SorryForm2 />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/tax" element={<TaxInfo />} />
      <Route path="/home" element={<RealEstate />} />
    </Routes>
  );
};

export default CRoutes;
