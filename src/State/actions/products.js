import { SET_PRODUCTS } from "../constants/actionTypes";

const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

const getProducts = () => {
  return async function (dispatch, getState) {
    const response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    dispatch({ type: SET_PRODUCTS, payload: data });
  };
};

export { setProducts, getProducts };
