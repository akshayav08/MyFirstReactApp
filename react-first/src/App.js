import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/Expenses/NewExpense';
function App() {
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

  const addExpoenseHandler=(myexpense)=>{
console.log("App", myexpense);
  };

  return (
    <div>
      Hello World

<NewExpense onNewExpenseAdded={addExpoenseHandler}/>
<Expenses list={expenses}/>
     
      
    </div>
  );
}

export default App;
