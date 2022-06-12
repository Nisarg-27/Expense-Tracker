import './App.css';
import ExpenseItem from './component/ExpenseItem';
import Card from './component/card';
import NewExpense from './component/newExpense';
import ExpenseFilter from './component/expenseFilter';
import { useState } from 'react';
import AddButton from './component/AddButton';

const dummy_expenses = [
  {
    id: 5,
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 4, title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 3,
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 1,
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  
];


function App() {
  const [expenses, setExpense] = useState(dummy_expenses);
  const [isEditing, setEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
      id: Math.random.toString(),
      ...enteredExpenseData,
    };
    setExpense(prevExpense => {
      return [expenseData, ...prevExpense];
    });
  }

  const [filteredYear, setFilterYear] = useState('2022'); 

  const expenseChangeFilter = (selectedYear) =>{
    setFilterYear(selectedYear);
  }

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const addButton = () =>{
    setEditing(true);
  };

  const closeButton = () =>{
    setEditing(false);
  };

  return (
    <>
    <h1 className='headd'>Expense Tracker</h1>
    {!isEditing && <AddButton onChange={addButton}/>}
    {isEditing && <NewExpense onSaveExpenseData={saveExpenseDataHandler} onChange={closeButton} ></NewExpense>} 
    <Card className='main'>
    <ExpenseFilter selected={filteredYear} onFilterChange={expenseChangeFilter}/>
    {filteredExpenses.length === 0 ? <div className='block'><h2>No expense Found</h2></div> : filteredExpenses.map(expense => {
      return (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>);
    })}
    {}
    </Card>
    </>
  );
}

export default App;
