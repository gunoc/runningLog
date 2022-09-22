import React, { useState } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Card from "./UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title); //어떤 값인지 알 수 있는 이름, 값을 업데이트하는 함수
  const [pin, setPin] = useState(props.pin); //어떤 값인지 알 수 있는 이름, 값을 업데이트하는 함수

  const clickHandler = () => {
    setTitle('책갈피?');
  };
  const clickPinHandler = () => {
    setPin(<FontAwesomeIcon icon={faStar}/>);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div></div>
        <div className="expense-item__price">{props.amount} km</div>
      </div>
      <button onClick={clickHandler}>제목수정</button>
      <div onClick={clickPinHandler}>{pin}</div>
    </Card>
  );
}

export default ExpenseItem;
