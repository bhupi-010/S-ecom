export const getProduct = (item) => {
  return {
    type: "GET_PRODUCT",
    payload: {
      product: item,
    },
  };
};

export const getProducts = (data) => {
  return {
    type: "GET_PRODUCTS",
    payload: {
      products: data,
    },
  };
};

export const addToCart = (product,quan) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      product: product,
      quantity:quan
    },
  };
};


export const delCartItem = (item,price) => {
  return {
    type: "DEL_CART_ITEM",
    payload: {
      product: item,
      quantity:item.quantity,
      price:price,
    },
  };
};

export const logIn = (email) => {
  return {
    type: "LOG_IN",
    payload: {
     
      email:email,

    },
  };
}

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
}