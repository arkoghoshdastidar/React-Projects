import './ExpenseDate.css';

const ExpenseDate = props => {
    const month = props.date.toLocaleString('US-en', { month: 'long' });
    const day = props.date.toLocaleString('US-en', { day: 'numeric' });
    const year = props.date.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;