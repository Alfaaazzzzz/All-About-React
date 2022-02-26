import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';

import { ToggleActions } from '../../store/cartToggle-slice';

const CartButton = (props) => {

  const dispatch= useDispatch()
  const quantity= useSelector(state=>state.cartItem.totalQuantity)

  const showCartHandler=()=>{
    dispatch(ToggleActions.SHOW())
  }

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
