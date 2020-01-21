import React from 'react';
import PortfolioStore from './PortfolioStore'

const storeContext = React.createContext(null);

export function StoreProvider({ children }) {
   
    const portfolioStore = PortfolioStore;
   return <storeContext.Provider value={{ portfolioStore }}>{children}</storeContext.Provider>
}

export function useStores() {
   const stores = React.useContext(storeContext);
   if (!stores) {
       throw new Error('useStores must be used within a StoreProvider.');
   }
   return stores;
}