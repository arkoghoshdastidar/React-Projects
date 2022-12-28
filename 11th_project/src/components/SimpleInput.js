import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [inputFieldTouched, setInputFieldTouched] = useState(false);
  
  const enteredUsernameIsValid = enteredName.trim() !== '';

  const userNameChangeHandler = (event) => {
    setInputFieldTouched(true);
    setEnteredName(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setInputFieldTouched(true);
    if(!enteredUsernameIsValid) {
      return;
    }
    setEnteredName('');
    setInputFieldTouched(false);
  }

  const enteredNameBlurHandler = () => {
    setInputFieldTouched(true);
  }

  const namedInputIsValid = (!enteredUsernameIsValid && inputFieldTouched) ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={namedInputIsValid}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' id='name' onChange={userNameChangeHandler} onBlur={enteredNameBlurHandler} />
        {!enteredUsernameIsValid && inputFieldTouched && <p className="error-text">Username should not be empty string.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;