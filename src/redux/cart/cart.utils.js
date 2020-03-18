export const addItemToCart = (cartItems, cartToAdd) => {
  const existItemInCart = cartItems.find(cartItem => cartItem.id, cartToAdd.id);

  if (existItemInCart) {
    return cartItems.map(cartItem =>
      cartItem.id === cartToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartToAdd, quantity: 1 }];
};
