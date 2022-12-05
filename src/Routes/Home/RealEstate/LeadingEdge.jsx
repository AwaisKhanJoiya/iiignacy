import React from "react";
import lead from "../../../assets/lead.jpg";

const LeadingEdge = () => {
  return (
    <>
      <div
        className="img_body"
        style={{ backgroundImage: `url(${lead})` }}
      ></div>
      <div className="lead_container">
        <div className="lead_text">
          <div className="l_text">
            <span>LEADING</span>

            <span> EGDE</span>

            <p>real estate</p>
          </div>
          <p>
            For over two decades, Leading Edge has been a force in the Greater
            Boston real estate market. We’ve grown to become a leading
            full-service real estate company offering residential real estate
            and global relocation services to buyers and sellers in all of
            Eastern Massachusetts, Cape Cod, and Southern New Hampshire. We have
            ten strategically located Massachusetts offices in Andover,
            Arlington, Belmont, Boston, Cambridge, Lexington, Melrose, Reading,
            Wakefield, Winchester and Yarmouth Port. <br />
            As a large independent brokerage, our agents thrive thanks in part
            to strong and accessible leadership, inventive career development,
            creative marketing services, and an inclusive, welcoming culture.
            We’re proud to have received The Boston Globe Top Places To Work
            award annually since 2011. <br />
            Home sellers and buyers rely on us for a strong devotion to ethics,
            intelligent and well-trained agents, a constant eye on market
            dynamics, a penchant for details, and outstanding services before,
            during, and after every transaction.
          </p>
          <p className="fw-bold mt-4">
            13 Locations all over the Greater Boston Area: Andover, Arlington,
            Belmont, Boston, Cambridge, Lexington, Melrose, Reading, Wakefield,
            Winchester, Yarmouth Port, Salem NH and Windham NH
          </p>
        </div>
      </div>
    </>
  );
};

export default LeadingEdge;
