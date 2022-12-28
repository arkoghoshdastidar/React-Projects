import styles from './Modal.module.css';

const Modal = props => {
    const formSubmitHandler = event => {
        event.preventDefault();
        props.removeModal();
    }

    return (
        <div className={(!props.modalFlag) ? styles['hide'] :
            styles['modal'] + ' ' + styles['center']}>
            <div>Please enter correct credentials!</div>
            <form className={styles.form} onSubmit={formSubmitHandler}>
                <button className={styles.btn}>OK</button>
            </form>
        </div>
    );
}

export default Modal;