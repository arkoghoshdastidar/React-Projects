import classes from './CartButton.module.css';
import {  useSelector, useDispatch } from 'react-redux';
import { uiSliceActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalItems = useSelector(state => state.cart.totalItems);

  const buttonClickHandler = () => {
    dispatch(uiSliceActions.toggleShoppingCart());
  }

  return (
    <button onClick={buttonClickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;