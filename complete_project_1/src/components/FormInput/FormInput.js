import styles from './FormInput.module.css';
import {useState} from 'react';

const FormIput = props => {
    let [username, setUsername] = useState('');
    let [age, setAge] = useState('');

    const usernameChangeHandler = event => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = event => {
        setAge(event.target.value);
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        const userDetails = {
            'name' : username,
            'age'  : age,
            'id'   : Math.round(Math.random())
        };
        props.OnFormSubmit(userDetails);
        setUsername('');
        setAge('');
    }

    return (
        <form className={styles['input-form']} onSubmit={formSubmitHandler}>
            <div className={styles["form-group"]}>
                <label htmlFor="exampleUsername">Username</label>
                <input 
                    type="text"
                    className={styles["form-control"]} 
                    value={username}
                    id="exampleUsername" 
                    onChange = {usernameChangeHandler}
                />
            </div>

            <div className={styles["form-group"]}>
                <label htmlFor="exampleAge">Age (Years)</label>
                <input 
                value={age}
                type="number" 
                className={styles["form-control"]} id="exampleAge" 
                onChange={ageChangeHandler}
                // required
            />
            </div>

            <button type="submit" className={styles['submitBtn']}>Add User</button>
        </form>
    );
}

export default FormIput;