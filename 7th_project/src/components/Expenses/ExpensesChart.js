// {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   }
import Chart from '../Chart/Chart';

const ExpensesChart = props => {
    return (<Chart maxValue={props.maxValue} datapoints={props.datapoints}></Chart>);
}

export default ExpensesChart;