import classes from './Checkout.module.css';
import { useRef, useState, useContext } from 'react';
import cartContext from '../../store/cart-context';

function isEmpty(string) {
    return string.trim() === '';
}

function fiveCharsLong(string) {
    return string.trim().length === 5;
}

const Checkout = (props) => {
    const cartCtx = useContext(cartContext);

    const inputName = useRef();
    const inputStreet = useRef();
    const inputPostalCode = useRef();
    const inputCity = useRef();

    const [formValidity, setFormValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    });

    const formSubmitHandler = (event) => {
        
        const enteredName = inputName.current.value;
        const enteredStreet = inputStreet.current.value;
        const enteredPostalCode = inputPostalCode.current.value;
        const enteredCity = inputCity.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalCodeIsValid = fiveCharsLong(enteredPostalCode);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid;

        if (!formIsValid) {
            event.preventDefault();
            setFormValidity({
                name: enteredNameIsValid,
                street: enteredStreetIsValid,
                postalCode: enteredPostalCodeIsValid,
                city: enteredCityIsValid
            });
            return;
        }
        
        // submit the form.
        fetch('https://food-app-72a96-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    name: enteredName,
                    city: enteredCity,
                    street: enteredStreet,
                    postalCode: enteredPostalCode
                },
                items: cartCtx.items
            })
        })

    }

    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <div className={classes.control}>
                <label htmlFor="name">Your Name</label>
                <input type="text" ref={inputName} id="name"></input>
                {!formValidity.name && <p className={classes.invalid}>Please enter a valid name!</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor="street">Street</label>
                <input type="text" ref={inputStreet} id="street"></input>
                {!formValidity.street && <p className={classes.invalid}>Please enter a valid street!</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor="postalCode">Postal Code</label>
                <input type="text" ref={inputPostalCode} id="postalCode"></input>
                {!formValidity.postalCode && <p className={classes.invalid}>Please enter a valid postal code(5 characters long)!</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input type="text" ref={inputCity} id="city"></input>
                {!formValidity.city && <p className={classes.invalid}>Please enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button>Confirm</button>
            </div>
        </form>
    )
};

export default Checkout;