import React, { useState } from "react";
import buyData from "./BuyApi";
import buy from "../../../assets/buy.jpg";

const Buy = () => {
  const [text, setText] = useState(buyData);
  return (
    <div>
      <div className="img_body" style={{ backgroundImage: `url(${buy})` }}>
        <h1>BUY</h1>
      </div>
      <div className="buy_container">
        {text.map((curData) => {
          const { id, question, answer } = curData;
          return (
            <div className="buy_text_box" key={id}>
              <div className="number">
                <span>{id}</span>
              </div>
              <div className="ques_ans">
                <p>{question}</p>
                <p>{answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Buy;
