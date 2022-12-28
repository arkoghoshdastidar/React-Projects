import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    return <div className='chart'>
        {
            props.datapoints.map((datapoint) => <ChartBar
                key={datapoint.label}
                value={datapoint.value}
                label={datapoint.label}
                maxValue={props.maxValue}
            ></ChartBar>)
        }
    </div>
}

export default Chart;