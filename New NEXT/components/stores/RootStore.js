

import PortfolioStore from './PortfolioStore';

export default function initializeStore() {
  
    return {
        portfolioStore: new PortfolioStore(),
    };
  }
  