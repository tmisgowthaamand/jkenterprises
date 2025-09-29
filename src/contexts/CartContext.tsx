import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, InquiryCartItem } from '../types';

interface CartState {
  granuleCart: CartItem[];
  inquiryCart: InquiryCartItem[];
}

type CartAction =
  | { type: 'ADD_TO_GRANULE_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_GRANULE_CART'; payload: number }
  | { type: 'UPDATE_GRANULE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_GRANULE_CART' }
  | { type: 'ADD_TO_INQUIRY_CART'; payload: InquiryCartItem }
  | { type: 'REMOVE_FROM_INQUIRY_CART'; payload: number }
  | { type: 'CLEAR_INQUIRY_CART' };

const initialState: CartState = {
  granuleCart: [],
  inquiryCart: []
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_TO_GRANULE_CART':
      const existingItem = state.granuleCart.find(item => item.product.id === action.payload.product.id);
      if (existingItem) {
        return {
          ...state,
          granuleCart: state.granuleCart.map(item =>
            item.product.id === action.payload.product.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      }
      return {
        ...state,
        granuleCart: [...state.granuleCart, action.payload]
      };
    
    case 'REMOVE_FROM_GRANULE_CART':
      return {
        ...state,
        granuleCart: state.granuleCart.filter(item => item.product.id !== action.payload)
      };
    
    case 'UPDATE_GRANULE_QUANTITY':
      return {
        ...state,
        granuleCart: state.granuleCart.map(item =>
          item.product.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    
    case 'CLEAR_GRANULE_CART':
      return { ...state, granuleCart: [] };
    
    case 'ADD_TO_INQUIRY_CART':
      return {
        ...state,
        inquiryCart: [...state.inquiryCart, action.payload]
      };
    
    case 'REMOVE_FROM_INQUIRY_CART':
      return {
        ...state,
        inquiryCart: state.inquiryCart.filter(item => item.product.id !== action.payload)
      };
    
    case 'CLEAR_INQUIRY_CART':
      return { ...state, inquiryCart: [] };
    
    default:
      return state;
  }
}

interface CartContextType extends CartState {
  addToGranuleCart: (item: CartItem) => void;
  removeFromGranuleCart: (id: number) => void;
  updateGranuleQuantity: (id: number, quantity: number) => void;
  clearGranuleCart: () => void;
  addToInquiryCart: (item: InquiryCartItem) => void;
  removeFromInquiryCart: (id: number) => void;
  clearInquiryCart: () => void;
  granuleCartTotal: number;
  granuleCartCount: number;
  inquiryCartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const granuleCartTotal = state.granuleCart.reduce(
    (total, item) => total + (item.product.unit_price || 0) * item.quantity,
    0
  );

  const granuleCartCount = state.granuleCart.reduce(
    (count, item) => count + item.quantity,
    0
  );

  const inquiryCartCount = state.inquiryCart.length;

  const contextValue: CartContextType = {
    ...state,
    addToGranuleCart: (item) => dispatch({ type: 'ADD_TO_GRANULE_CART', payload: item }),
    removeFromGranuleCart: (id) => dispatch({ type: 'REMOVE_FROM_GRANULE_CART', payload: id }),
    updateGranuleQuantity: (id, quantity) => dispatch({ type: 'UPDATE_GRANULE_QUANTITY', payload: { id, quantity } }),
    clearGranuleCart: () => dispatch({ type: 'CLEAR_GRANULE_CART' }),
    addToInquiryCart: (item) => dispatch({ type: 'ADD_TO_INQUIRY_CART', payload: item }),
    removeFromInquiryCart: (id) => dispatch({ type: 'REMOVE_FROM_INQUIRY_CART', payload: id }),
    clearInquiryCart: () => dispatch({ type: 'CLEAR_INQUIRY_CART' }),
    granuleCartTotal,
    granuleCartCount,
    inquiryCartCount
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}