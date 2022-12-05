import React from "react";
import sellData from "./SellApi";
import { useState } from "react";
import backGround from "../../../assets/sell.jpg";

const Sell = () => {
  const [text, setText] = useState(sellData);

  return (
    <div>
      <div
        className="img_body"
        style={{ backgroundImage: `url(${backGround})` }}
      >
        <h1>SELL</h1>
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

export default Sell;
