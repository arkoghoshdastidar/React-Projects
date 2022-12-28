import ExpensesList from './ExpensesList';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const [maxValue, setMaxValue] = useState(0);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthExpenses = [];
    for (let i = 0; i < 12; i++) monthExpenses.push({ value: 0, label: months[i] });

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        setMaxValue(0);
    }
    
    props.expenses.forEach((expense) => {
        if (filteredYear == expense.date.getFullYear()) {
            let monthNum = expense.date.getMonth();
            monthExpenses[monthNum].value += expense.amount;
            if (monthExpenses[monthNum].value > maxValue) { setMaxValue(monthExpenses[monthNum].value); }
        }
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            <ExpensesChart maxValue={maxValue} datapoints={monthExpenses}></ExpensesChart>
            <ExpensesList expenses={props.expenses} filteredYear={filteredYear}></ExpensesList>
        </Card>
    );
}

export default Expenses;