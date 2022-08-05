import Header from "../../Components/Header/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import first from "../../assets/slider/first.jpg";
import second from "../../assets/slider/second.jpg";
import third from "../../assets/slider/third.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import gaming from "../../assets/items/gaming.jpg";
import dress from "../../assets/items/dress.jpg";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(25% - 15px)",
    width: 30,
    height: 40,
    cursor: "pointer",
  };

  return (
    <>
      <Header />
      <div className="i-container">
        <Carousel
          className="home-carousel"
          autoPlay
          infiniteLoop
          swipeable
          emulateTouch
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          useKeyboardArrows
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, left: 15 }}
              />
            )
          }
          renderArrowNext={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, right: 15 }}
              />
            )
          }
          stopOnHover
        >
          <div className="item">
            <img src={first} />
          </div>
          <div>
            <img src={second} />
          </div>
          <div>
            <img src={third} />
          </div>
        </Carousel>
        <div className="cat-container">
          <div className="d-flex flex-wrap cat-container-inner px-3">
            <div className="cat-card">
              <div className="cat-card-inner d-flex flex-column p-3">
                <h2 className="cat-title">Gaming accessories</h2>
                <img src={gaming} alt="gaming" className="cat-img" />
                <span className="cat-btn">Shop now</span>
              </div>
            </div>
            <div className="cat-card">
              <div className="cat-card-inner d-flex flex-column p-3">
                <h2 className="cat-title">Dresses</h2>
                <img src={dress} alt="dress" className="cat-img" />
                <span className="cat-btn">Shop now</span>
              </div>
            </div>
            <div className="cat-card">
              <div className="cat-card-inner d-flex flex-column p-3">
                <h2 className="cat-title">Gaming accessories</h2>
                <img src={gaming} alt="gaming" className="cat-img" />
                <span className="cat-btn">Shop now</span>
              </div>
            </div>
            <div className="cat-card">
              <div className="cat-card-inner d-flex flex-column p-3">
                <h2 className="cat-title">Dresses</h2>
                <img src={dress} alt="dress" className="cat-img" />
                <span className="cat-btn">Shop now</span>
              </div>
            </div>
            <div className="cat-card">
              <div className="cat-card-inner d-flex flex-column p-3">
                <h2 className="cat-title">Gaming accessories</h2>
                <img src={gaming} alt="gaming" className="cat-img" />
                <span className="cat-btn">Shop now</span>
              </div>
            </div>
            <div className="cat-card">
              <div className="cat-card-inner d-flex flex-column p-3">
                <h2 className="cat-title">Dresses</h2>
                <img src={dress} alt="dress" className="cat-img" />
                <span className="cat-btn">Shop now</span>
              </div>
            </div>
            <div className="cat-card">
              <div className="cat-card-inner d-flex flex-column p-3">
                <h2 className="cat-title">Gaming accessories</h2>
                <img src={gaming} alt="gaming" className="cat-img" />
                <span className="cat-btn">Shop now</span>
              </div>
            </div>
            <div className="cat-card">
              <div className="cat-card-inner d-flex flex-column p-3">
                <h2 className="cat-title">Dresses</h2>
                <img src={dress} alt="dress" className="cat-img" />
                <span className="cat-btn">Shop now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
