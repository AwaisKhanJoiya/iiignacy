import React from "react";
const Meet = () => {
  return (
    <div className="meet_container">
      {/* meet anne container  */}
      <h1>MEET ANNE</h1>
      <div className="d-flex justify-content-center  mt-5">
        <div className="l_meet w-25">
          <img src="./women.webp" alt="" />
          <h2>ANNE MAHON</h2>

          <p>617-990-7660</p>

          <p>annemahon.realtor@gmail.com</p>
        </div>
        <div className="r_meet w-25">
          <p>
            MEET ANNE A Belmont resident for 20 years, Anne Mahon has been
            involved in many aspects of the Belmont community including being a
            town meeting member, running as Selectman and coaching youth sports.
            Her energetic approach to real estate allows her to provide a high
            level of customer service to each and every client. She knows the
            ins and outs of Belmont and its surrounding communities and can find
            the home of your dreams or help you get top dollar when selling.
          </p>
          <button className="meet_btn">contact anne</button>
        </div>
      </div>

      {/* find your dream container  */}
      <div className="dream_container">
        <div className="blue_box">
          <h1>
            FIND YOUR
            <br />
            DREAM HOME
          </h1>
          <div className="form_container">
            <input
              className="select w-100"
              type="text"
              placeholder="search by neighborhood,city or school"
            />
            <div className="w-100 d-flex justify-content-between">
              <select name="" id="" className="select">
                <option value="" selected>
                  Beds
                </option>
                <option value="">0</option>
                <option value="">1+</option>
                <option value="">2+</option>
                <option value="">3+</option>
                <option value="">4+</option>
                <option value="">5+</option>
              </select>
              <select name="" id="" className="select">
                <option value="" selected>
                  Baths
                </option>
                <option value="">0</option>
                <option value="">1+</option>
                <option value="">2+</option>
                <option value="">3+</option>
              </select>
              {/* <input className="w-50" type="text" placeholder="Beds" />
              <input className="w-50" type="text" placeholder="Baths" /> */}
            </div>
            <div className="w-100  d-flex justify-content-between">
              <select className="select" name="" id="">
                <option value="" selected>
                  Price min
                </option>
                <option value="">$100k</option>
                <option value="">$500k</option>
                <option value="">$1M</option>
                <option value="">$2M</option>
                <option value="">$3M</option>
                <option value="">$4M</option>
                <option value="">$5M</option>
                <option value="">$10M</option>
                <option value="">$20M</option>
              </select>
              <select className="select" name="" id="">
                <option value="" selected>
                  Price max
                </option>
                <option value="">$100k</option>
                <option value="">$500k</option>
                <option value="">$1M</option>
                <option value="">$2M</option>
                <option value="">$3M</option>
                <option value="">$4M</option>
                <option value="">$5M</option>
                <option value="">$10M</option>
                <option value="">$20M</option>
              </select>
              {/* <input className="w-50" type="text" placeholder="Price min" />
              <input className="w-50" type="text" placeholder="Price max" /> */}
            </div>
            <button className="select w-100">Search</button>
          </div>
          <button className="meet_btn listings_btn">SEE ALL MY LISTINGS</button>
        </div>
      </div>
      {/* take a seat container  */}
      <div className="seat_container">
        <span>Take a seat and relax</span>
        <p>I'VE GOT YOUR BACK.</p>
      </div>
    </div>
  );
};

export default Meet;
