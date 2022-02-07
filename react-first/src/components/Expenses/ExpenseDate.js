import  "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return <div className="expenseDate">
      <div className="expenseMonth">{month}</div>
      <div>{year}</div>
      <div className="expenseDay">{day}</div>
  </div>;
}

export default ExpenseDate;
