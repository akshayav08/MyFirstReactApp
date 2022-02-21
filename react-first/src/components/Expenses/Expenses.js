import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from '../Expenses/ExpenseItem';
import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
const Expenses=(props)=> {
  const[filteredDate,setFilteredDate] =useState('2020');
  const getFilteredDate=(filterDate)=>{
    console.log("expense-filt",filterDate);
    setFilteredDate(filterDate);
console.log('expense:',filteredDate);
  };

  return (
    <div>
      
    <Card className="expenses">
    <ExpenseFilter onChangeOfFilter={getFilteredDate} selected={filteredDate}/>
      <ExpenseItem
        title={props.list[0].title}
        amount={props.list[0].amount}
        date={props.list[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.list[1].title}
        amount={props.list[1].amount}
        date={props.list[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.list[2].title}
        amount={props.list[2].amount}
        date={props.list[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.list[3].title}
        amount={props.list[3].amount}
        date={props.list[3].date}
      ></ExpenseItem>
    </Card>
    </div>
  );
  }
  export default Expenses;

