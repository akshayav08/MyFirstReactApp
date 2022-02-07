import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from '../Expenses/ExpenseItem';
const Expenses=()=> {
  const expenses = [
    {
      id: "e1",
      title: "car insurance1",
      amount: "$ 30",
      date: new Date(2022, 1, 20),
    },
    {
      id: "e2",
      title: "car insurance2",
      amount: "$ 3550",
      date: new Date(2022, 1, 21),
    },
    {
      id: "e3",
      title: "car insurance3",
      amount: "$ 350",
      date: new Date(2022, 1, 22),
    },
    {
      id: "e4",
      title: "car insurance4",
      amount: "$ 306",
      date: new Date(2022, 1, 23),
    },
  ];

  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
  }
  export default Expenses;

