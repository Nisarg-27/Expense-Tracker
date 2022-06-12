import { useState } from "react";

const NewExpense = (props) => {
    const [enterTitle, setEnteredTitle] = useState('');
    const [enterAmount, setEnteredAmount] = useState('');
    const [enterDate, setEnteredDate] = useState('');
    const TitleChange = (event) => {
        setEnteredTitle(event.target.value);
    };
    const AmountChange = (event) => {
        setEnteredAmount(event.target.value);
    };
    const DateChange = (event) => {
        setEnteredDate(event.target.value);
    };

    const Submission = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    };

    const close = () =>{
        props.onChange();
    };

    return (
        <form className="form" onSubmit={Submission}>
            <div className="first">
                <input type="text" placeholder="Title" value={enterTitle} onChange={TitleChange}/>
                <input type="number" placeholder="Amount" min="1" step="1" value={enterAmount} onChange={AmountChange} />
                <input type="date" placeholder="Date" value={enterDate} onChange={DateChange}/>
            </div>
            <div className="buttons"><button type="submit">Add Expense</button>
            <button onClick={close}>Close</button></div>
            
        </form>
    );
}

export default NewExpense;