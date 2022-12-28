import styles from './ListItems.module.css';

const ListItem = props => {
    return (
        <li className={styles.listItem}>
            {props.detail.name + ' (' + props.detail.age + ' years old)'}
        </li>
    );
}

export default ListItem;