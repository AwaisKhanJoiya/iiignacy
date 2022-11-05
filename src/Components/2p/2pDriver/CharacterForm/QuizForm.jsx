import React from "react";
import { useState } from "react";
import BackButton from "../../../BackButton";
import CloseIcon from "../../../CloseIcon";
import Quiz from "./Quiz";

const QuizForm = () => {
  const [selected, setSelected] = useState("quiz");

  return (
    <div className="quiz_container p-4">
      <div>
        <BackButton />
        <CloseIcon />
      </div>
      {selected === "quiz" && <Quiz setSelected={setSelected} />}
    </div>
  );
};

export default QuizForm;
