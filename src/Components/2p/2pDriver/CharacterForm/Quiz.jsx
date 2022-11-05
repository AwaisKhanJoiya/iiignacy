import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
import { useEffect } from "react";
import Questions from "./Api";
import MyQuiz from "./MyQuiz";

const Quiz = ({ setSelected }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState(Questions[currentPage]);

  useEffect(() => {
    setData(Questions[currentPage]);
  }, [currentPage]);

  return (
    <div className="quiz_form">
      <h3 className="mb-4 text-center fw-bold fs-4">{data.title}</h3>
      {data.questions.map((curElem) => {
        const { id, question, ans1, ans2, ans3, ans4, ans5 } = curElem;
        return <MyQuiz data={curElem} key={id} />;
      })}

      <div className="quizbtns_div mt-4 d-flex justify-content-between">
        <button
          className="quiz_btn "
          onClick={() =>
            setCurrentPage(currentPage === 0 ? 0 : currentPage - 1)
          }
        >
          <FontAwesomeIcon className="quiz_icon" icon={faBackward} />
        </button>
        <button
          onClick={() =>
            setCurrentPage(
              currentPage === Questions.length - 1
                ? currentPage
                : currentPage + 1
            )
          }
          className="quiz_btn"
        >
          <FontAwesomeIcon className="quiz_icon" icon={faForward} />
        </button>
      </div>
    </div>
  );
};

export default Quiz;
