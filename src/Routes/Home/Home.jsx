import Header from "../../Components/Header/Header";
import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Body from "./Body";
import SeasonalPage from "./TodayDeal/SeasonalPage";
import Entertainment from "./Entertainment";
import Eighteen from "./Eighteen";
import EighteenCat from "./EighteenCat";
import Fashion from "./Fashion";
import Booking from "./Booking";
// import RealEstateHome from "./RealEstate/RealEstateHome";

const Home = () => {
  const [selected, setSelected] = useState("body");

  return (
    <>
      <Header setSelected={setSelected} />
      {selected === "body" && <Body setSelected={setSelected} />}
      {selected === "season" && <SeasonalPage setSelected={setSelected} />}
      {selected === "entertainment" && (
        <Entertainment setSelected={setSelected} />
      )}
      {selected === "eighteen" && <Eighteen setSelected={setSelected} />}
      {selected === "categury" && <EighteenCat setSelected={setSelected} />}
      {selected === "fashion" && <Fashion setSelected={setSelected} />}
      {selected === "booking" && <Booking setS-elected={setSelected} />}

      <Footer />
    </>
  );
};

export default Home;
