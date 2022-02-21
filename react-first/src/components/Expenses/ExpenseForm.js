import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //using only one state
  // const[userInput,setUserInput]=useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // });

  const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value);
    //   setUserInput({
    //       ...userInput,
    //       enteredTitle:event.target.value
    //   })
    //   };
    // setUserInput((prevState)=>{
    // return {...prevState,enteredTitle:event.target.value};
    // })
  };

  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount:event.target.value
    //     })
  };

  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
    //     setUserInput({
    //         ...userInput,
    //         enteredDate:event.target.value
    //     })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
  };

  

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangedHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
