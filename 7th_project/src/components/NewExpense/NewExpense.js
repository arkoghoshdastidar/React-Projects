import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const newExpenseDataHandler = expenseData => {
        const newDataWithId = {
            ...expenseData,
            id : Math.random().toString()
        }

        props.onAddNewExpenseData(newDataWithId);
    }

    return (
        <div className = "new-expense">
            <ExpenseForm onSaveExpenseData = {newExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;