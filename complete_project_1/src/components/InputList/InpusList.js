import styles from './InputList.module.css';
import ListItems from './ListItems.js';

const InputList = props => {
    return (
        <ul className={styles.detailsList}>
            {
                (props.details.length != 0) ? props.details.map(detail => {
                    return (<ListItems key={detail.id} detail={detail}></ListItems>);
                }) : <p className={styles.noData}>No data found!</p>
            }
        </ul>
    );
}

export default InputList;