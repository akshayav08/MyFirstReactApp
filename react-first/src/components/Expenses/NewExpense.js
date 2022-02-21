import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {

const onSaveExpenseHandler=(enteredExpenseData)=>{
const expenseData={
    ...enteredExpenseData,
    id:Math.random().toString()
}
props.onNewExpenseAdded(expenseData);
}

  return (
    <div className="new-expense">
     <ExpenseForm onSaveExpenseData={onSaveExpenseHandler}/>
    </div>
  );
};
export default NewExpense;
