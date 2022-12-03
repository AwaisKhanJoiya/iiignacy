import React from "react";

const Entertainment = () => {
  const list = [
    "Action",
    "My list",
    "Action",
    "Anime",
    "Comedies",
    "Crime",
    "Dramas",
    "Fantasy",
    "Holidays",
    "Horror",
    "Kid & Family",
    "Music",
    // "Musicals",
    // "Reality Show",
    // "Romance",
    // "Sci-Fi",
    // "Stand-up",
    // "Beautiful Game",
    // "Thrillers",
    // "Audio Description",
  ];
  return (
    <div className="entertainment">
      <div className="entertainment_navbar">
        {list.map((curElem, index) => {
          return (
            <div className="circle" key={index}>
              <p>{curElem}</p>
            </div>
          );
        })}
      </div>

      <div className="entertainment_img">
        <img src="ecommerce.png" alt="" />
      </div>
    </div>
  );
};

export default Entertainment;
