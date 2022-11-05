import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const MyQuiz = ({ data }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="question_div">
      <p onClick={() => setShow(!show)} className="q_heading">
        {data.question}
        <p>
          {show ? (
            <FontAwesomeIcon
              className="arrow_icon dropdown"
              icon={faChevronUp}
            />
          ) : (
            <FontAwesomeIcon
              className="arrow_icon dropdown"
              icon={faChevronDown}
            />
          )}
        </p>
      </p>
      {show && (
        <div className="ans_div">
          <div>
            <input
              type="radio"
              id={data.ans1.id}
              name={data.id}
              className="circles"
            />
            <label htmlFor={data.ans1.id} className=" my-2 ms-4 cursor-pointer">
              {data.ans1.text}
            </label>
          </div>
          <div>
            <input
              type="radio"
              id={data.ans2.id}
              name={data.id}
              className="circles"
            />
            <label htmlFor={data.ans2.id} className=" ms-4 cursor-pointer">
              {data.ans2.text}
            </label>
          </div>
          <div>
            <input
              type="radio"
              id={data.ans3.id}
              name={data.id}
              className="circles"
            />
            <label htmlFor={data.ans2.id} className="my-2 ms-4 cursor-pointer">
              {data.ans3.text}
            </label>
          </div>
          <div>
            <input
              type="radio"
              id={data.ans4.id}
              name={data.id}
              className="circles"
            />
            <label htmlFor={data.ans4.id} className=" ms-4 cursor-pointer">
              {data.ans4.text}
            </label>
          </div>
          <div>
            <input
              type="radio"
              id={data.ans5.id}
              name={data.id}
              className="circles"
            />
            <label htmlFor={data.ans5.id} className="my-2 ms-4 cursor-pointer">
              {data.ans5.text}
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyQuiz;
