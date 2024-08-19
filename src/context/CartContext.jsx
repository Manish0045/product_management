import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingProduct = state.cart.find(item => item.id === action.product.id);
            if (existingProduct) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.product, quantity: 1 }],
                };
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.id),
            };
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.id ? { ...item, quantity: action.quantity } : item
                ),
            };
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const initialState = { cart: [] };
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
