import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import App from './App';
import { CartProvider } from './context/CartContext';
import "./index.css";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create a root
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
