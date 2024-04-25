const initialState = [];

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addToCart':
            const findProductIndex = state.findIndex((product) => product.id === action.payload.id);
            if (findProductIndex !== -1) {
                return state.map((product, index) =>
                    index === findProductIndex ? { ...product, quantity: product.quantity + 1 } : product
                );
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }

        case 'deleteFromCart':
            const foundProductIndex = state.findIndex((product) => product.id === action.payload.id);
            if (foundProductIndex !== -1) {
                if (state[foundProductIndex].quantity > 1) {
                    return state.map((product, index) =>
                        index === foundProductIndex ? { ...product, quantity: product.quantity - 1 } : product
                    );
                } else {
                    return state.filter((product) => product.id !== action.payload.id);
                }
            }
            return state;

        case 'clearCart':
            return [];

        default:
            return state;
    }
};

export default cartReducer;
