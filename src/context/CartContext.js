import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // const savedCart = TODO: Fetch cart from MONGODB
    // if (savedCart) setCart(JSON.parse(savedCart))
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    // TODO: Save cart to MONGODB
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
