import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user, setUer] = useState('');
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartProductList, setCartProductList] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    return (
        <DataContext.Provider
            value={{
                token, setToken,
                cartItemCount, setCartItemCount,
                cartProductList, setCartProductList,
                user, setUer,
                totalCost, setTotalCost,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};