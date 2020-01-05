import { observable , action } from "mobx"

class PortfolioStore{

      @observable isDialogOpen = false;
      @observable portfolioItem = {};

      @action openDialog = (item) => {

        this.isDialogOpen = true;
        this.portfolioItem = item;
        
      }

}
 
const store = new PortfolioStore();

export default store;