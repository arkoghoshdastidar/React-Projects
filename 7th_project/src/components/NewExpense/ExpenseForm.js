import './ExpenseForm.css'
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [changedTitle, changeTitle] = useState('');
    const [changedAmount, changeAmount] = useState('');
    const [changedDate, changeDate] = useState('');

    // const [userInput, changeUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });

    const titleChangeHandler = (event) => {
        // changeUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value
        // });

        changeTitle((prevTitle) => {
            return event.target.value;
        })
    }

    const amountChangeHandler = (event) => {
        // changeUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value
        // });

        changeAmount((prevAmount) => {
            return event.target.value;
        })
    }

    const dateChangeHandler = (event) => {
        // changeUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value
        // });

        changeDate((prevDate) => {
            return event.target.value;
        })
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: changedTitle,
            amount: changedAmount,
            date: new Date(changedDate)
        };

        props.onSaveExpenseData(expenseData);

        changeTitle(prevTitle => '');
        changeAmount(amount => '');
        changeDate(date => '');
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={changedTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.04" step="0.01" value={changedAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-02-02" value={changedDate} onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;