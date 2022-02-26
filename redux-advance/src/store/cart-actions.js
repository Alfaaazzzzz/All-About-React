import { ToggleActions } from "./cartToggle-slice";
import { cartItemActions } from "./cartItem-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-practice-9c86c-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartItemActions.replaceCart({
          items:cartData.items || [],
          totalQuantity:cartData.totalQuantity
      }));
    } catch (error) {
      dispatch(
        ToggleActions.ShowNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      ToggleActions.ShowNotification({
        status: "pending",
        title: "sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-practice-9c86c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    };

    try {
      await sendRequest();

      dispatch(
        ToggleActions.ShowNotification({
          status: "success",
          title: "success!",
          message: "sent cart data Successfully",
        })
      );
    } catch (error) {
      dispatch(
        ToggleActions.ShowNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    }
  };
};
