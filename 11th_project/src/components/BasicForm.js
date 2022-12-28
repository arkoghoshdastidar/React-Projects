import useInput from '../hooks/user-input';

const BasicForm = (props) => {
  // form first name check;
  const {
    enteredValue: enteredFirstName,
    valueIsValid: firstNameIsValid,
    classes: firstNameClasses,
    valueChangeHandler: firstNameOnChangeHandler,
    onBlurHandler: firstNameOnBlurHandler,
    reset: resetFirstName
  } = useInput(value => {
    return value.trim() !== '';
  });

  // form last name check;
  const {
    enteredValue: enteredLastName,
    valueIsValid: lastNameIsValid,
    classes: lastNameClasses,
    valueChangeHandler: lastNameOnChangeHandler,
    onBlurHandler: lastNameOnBlurHandler,
    reset: resetLastName
  } = useInput(value => {
    return value.trim() !== '';
  });

  // form email check;
  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    classes: emailClasses,
    valueChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(value => {
    return value.includes('@');
  });

  const formSubmitHandler = (event) => { 
    event.preventDefault();
    firstNameOnBlurHandler();
    lastNameOnBlurHandler();
    emailBlurHandler();
    if(!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }
    resetEmail();
    resetFirstName();
    resetLastName();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={enteredFirstName}
            onChange={firstNameOnChangeHandler}
            onBlur={firstNameOnBlurHandler}
          />
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text'
            id='name'
            value={enteredLastName}
            onChange={lastNameOnChangeHandler}
            onBlur={lastNameOnBlurHandler}
          />
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
            type='text'
            id='name'
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
        />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;