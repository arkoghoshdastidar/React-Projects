import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';

const Login = (props) => {
  const ctx = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();

  // Using useReducer instead of useState()

  const [enteredEmail, dispatchEmail] = useReducer((prevState, action) => {
    if (action.type === 'EMAIL_CHANGE') {
      return { value: action.value, isValid: action.value.includes('@') };
    } else if (action.type === 'EMAIL_BLUR') {
      return { value: prevState.value, isValid: prevState.isValid };
    }
    return { value: '', isValid: false }
  },
    { value: '', isValid: null });

  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const [enteredPassword, dispatchPassword] = useReducer((prevState, action) => {
    if (action.type === 'PASSWORD_CHANGE') {
      return { value: action.value, isValid: action.value.trim().length > 6 }
    } else if (action.type === 'PASSWORD_BLUR') {
      return { value: prevState.value, isValid: prevState.isValid };
    }
    return { value: '', isValid: false };
  },
    { value: '', isValid: null }
  );

  // useEffect(() => {
  //   const timeoutVar = setTimeout(() => {
  //     setFormIsValid(
  //       enteredPassword.trim().length > 6 && enteredEmail.includes('@')
  //     )
  //   }, 500);

  //   return () => {
  //     clearTimeout(timeoutVar);
  //   }
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'EMAIL_CHANGE', value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'EMAIL_BLUR' });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'PASSWORD_CHANGE', value: event.target.value });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'PASSWORD_BLUR' });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(enteredEmail.value, enteredPassword.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          emailChangeHandler={emailChangeHandler}
          validateEmailHandler={validateEmailHandler}
          id="email"
          label="E-mail"
          type="email"
          isValid={enteredEmail.isValid}
          value={enteredEmail.value}
        ></Input>
        <Input
          emailChangeHandler={passwordChangeHandler}
          validateEmailHandler={validatePasswordHandler}
          id="password"
          label="Password"
          type="password"
          isValid={enteredPassword.isValid}
          value={enteredPassword.value}
        ></Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!(enteredEmail.isValid && enteredPassword.isValid)}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;