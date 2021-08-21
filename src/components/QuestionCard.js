import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionSetAnswer } from "../redux/action";

const QuestionCard = ({
  qitemNo,
  question,
  answer01,
  answer02,
  answer03,
  answer04,
  answerScore01,
  answerScore02,
}) => {

  const dispatch = useDispatch();
  const answers = useSelector((state) => state.answers);

  const handleChange = (e) => {
    dispatch(actionSetAnswer(e.target.value, qitemNo));
  };

  const ExampleDetail = () => {
    const checked = answers[qitemNo];
    if (checked === answerScore01) {
      return <p>{answer03}</p>;
    } else if (checked === answerScore02) {
      return <p>{answer04}</p>;
    } else {
      return <></>;
    }
  };

  return (
    <div className="question-card">
      <h3># {qitemNo}</h3>
      <h5>{question}</h5>
      {/* 0821 질문 1) */}
      <div className="option-container">
        <input
          id="question-1"
          type="radio"
          value={answerScore01}
          name={`Question-${qitemNo}`}
          checked={answers[qitemNo] === answerScore01 ? true : false}
          onChange={handleChange}
        />{" "}
        <label htmlFor="question-1">{answer01}</label>
        <input
          id="question-2"
          type="radio"
          value={answerScore02}
          name={`Question-${qitemNo}`}
          checked={answers[qitemNo] === answerScore02 ? true : false}
          onChange={handleChange}
        />{" "}
        <label htmlFor="question-2">{answer02}</label>
      </div>
      {ExampleDetail()}
    </div>
  );
};

export default QuestionCard;
