import React, { useState } from "react";
import ListingItem from "./ListingsApi";
import listings from "../../../assets/listings.jpg";

const Listings = () => {
  const [Imgs, setImgs] = useState(ListingItem);
  return (
    <>
      <div
        className="listings_body img_body"
        style={{ backgroundImage: `url(${listings})` }}
      >
        <h1>Listings</h1>
      </div>
      <div className="list_container">
        <p>Click on a Listing to View More Information</p>

        <div className="imgsBox">
          {Imgs.map((curData) => {
            const { id, img, price, adress } = curData;
            return (
              <div className="listimg" key={id}>
                <img src={img} alt="" />
                <p className="para1">{price}</p>
                <p className="para2">{adress} </p>
              </div>
            );
          })}
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Listings;
