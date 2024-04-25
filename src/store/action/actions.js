

export const addToCart = (product) => ({
    type: 'addToCart', 
    payload: product,
});

export const deleteFromCart = (product) => ({
    type: 'deleteFromCart', 
    payload: product,
});

export const clearCart = () => ({
    type: 'clearCart', 
});
