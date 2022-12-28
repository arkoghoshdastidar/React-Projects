import {useState} from 'react';

const useInput = (validationFunction) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const valueIsValid = validationFunction(enteredValue);
    const classes = (!valueIsValid && isFocused) ? 'form-control invalid' : 'form-control';

    const valueChangeHandler = (event) => {
        setIsFocused(true);
        setEnteredValue(event.target.value);
    }

    const onBlurHandler = () => {
        setIsFocused(true);
    }

    const reset = () => {
        setIsFocused(false);
        setEnteredValue('');
    }

    return {
        enteredValue,
        valueIsValid,
        classes,
        valueChangeHandler,
        onBlurHandler,
        reset
    };
};

export default useInput;