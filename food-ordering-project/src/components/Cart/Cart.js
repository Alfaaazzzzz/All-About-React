import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [showButtons, setShowButtons] = useState(true);
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderhandler = () => {
    setShowButtons(false);
    setShowCheckout(true);
  };
  const onFormCancel = () => {
    setShowButtons(true);
    setShowCheckout(false);
  };

  const submitHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-8ab82-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart()
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <React.Fragment>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckout && (
        <Checkout onCancel={onFormCancel} onConfirm={submitHandler} />
      )}
      <div className={classes.actions}>
        {showButtons && (
          <button className={classes["button--alt"]} onClick={props.onHideCart}>
            close
          </button>
        )}
        {hasItems && showButtons && (
          <button className={classes.button} onClick={orderhandler}>
            order
          </button>
        )}
      </div>
    </React.Fragment>
  );

  const isSubmitingModalContent = <div className="isSubmitLoading"></div>;

  const didSubmitCartContent = (
    <React.Fragment>
      <p>Your Oder has been Placed successfully🎉</p>
      <div className={classes.actions}>
        {
          <button className={classes.button} onClick={props.onHideCart}>
            close
          </button>
        }
      </div>
    </React.Fragment>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmitingModalContent}
      {!isSubmitting && didSubmit && didSubmitCartContent}
    </Modal>
  );
};

export default Cart;
