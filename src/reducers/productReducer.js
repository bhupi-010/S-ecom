const initialState = {
  products: [],
  productData: [],
  cart: [],
  cartQuantity: 0,
  grandTotal: 0,
  email:null,
  loggedIn:false,
 
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        productData: action.payload.product,
      };

    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.products,
      };

    case "ADD_TO_CART":
      const newCartQuantity =
        state.cartQuantity + parseInt(action.payload.quantity);
      const addGrand =
        parseInt(action.payload.quantity) *
        parseFloat(action.payload.product.price);
      const checkProduct = state.cart.find(
        (pro) => pro.product === action.payload.product
      );
      if (checkProduct) {
        const quan =
          parseInt(checkProduct.quantity) + parseInt(action.payload.quantity);
        const pro = checkProduct.product;
        const newCart = state.cart.filter(
          (item) => item.product !== action.payload.product
        );
        state = {
          ...state,
          cart: [
            ...newCart,
            {
              product: pro,
              quantity: quan,
            },
          ],
          cartQuantity: newCartQuantity,
          grandTotal: state.grandTotal + addGrand,
        };
      } else {
        state = {
          ...state,
          cart: [...state.cart, action.payload],
          cartQuantity: newCartQuantity,
          grandTotal: state.grandTotal + addGrand,
        };
      }

      return state;

    case "DEL_CART_ITEM":
      const subGrand =
        parseInt(action.payload.quantity) *
        parseFloat(action.payload.product.price);
      const newCart = state.cart.filter(
        (item) => item !== action.payload.product
      );
      const delCartQuantity =
        state.cartQuantity - parseInt(action.payload.quantity);
      return {
        ...state,
        cart: newCart,
        cartQuantity: delCartQuantity,
        grandTotal: state.grandTotal - subGrand,
      };

    

      case "LOG_IN":
        return {
          ...state,
          email: action.payload.email,
          loggedIn: true,
        };

      case "LOG_OUT":
        return {
          ...state,
          email: null,
          loggedIn: false,
        };

    default:
      return state;
  }
};

export default productReducer;
