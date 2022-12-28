import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    let noContent = <h1 className="expenses-list__fallback">No data found!</h1>;
    let content = props.expenses.map((expense, index) => {
        if (props.filteredYear == expense.date.getFullYear()) {
            return <ExpenseItem
                key={index}
                date={expense.date}
                amount={expense.amount}
                title={expense.title} />
        }
    });

    if (content.every(singleContent => singleContent === undefined)) {
        return noContent;
    }

    return <ul className="expenses-list">
        {content}
    </ul>;
}

export default ExpensesList;