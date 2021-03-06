import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import {sendCartData, fetchCartData} from './store/cart-actions'

let isInitial=true

function App() {
  const showCart = useSelector((state) => state.cartToggle.showCart);
  const cart = useSelector((state) => state.cartItem);
  const notification = useSelector((state) => state.cartToggle.notification);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(() => {
    if(isInitial){
      isInitial=false
      return;
    }

    if(cart.changed){
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
