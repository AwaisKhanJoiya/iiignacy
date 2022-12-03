import React from "react";

const Footer = () => {
  return (
    <div className="footer_container d-flex justify-content-around">
      <div className="l_foot">
        <span>LEADING</span>
        <span>EDGE</span>
        <div className="mt-4">
          <p className="m-0">84 Leonard Street</p>
          <p className="m-0">Belmont, MA 02478</p>
        </div>
        <p className="m-5 cursor-pointer">Accessibility Statement</p>
      </div>
      <div className="r_foot">
        <p>ANNE MAHON</p>
        <p>annemahon.realtor@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
