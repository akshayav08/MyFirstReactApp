import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import React,{useState} from 'react'

function ExpenseItem(props) {

const [title,setTitle]=useState(props.title);  //retuns two elements

  

  const clickHandler=()=>{
    setTitle("Updated");
   
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change</button>
    </Card>
  );
}
export default ExpenseItem;
