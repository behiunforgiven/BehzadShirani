import { observable , action } from "mobx"

class PortfolioStore{

      @observable isDialogOpen = false;
      @observable portfolioItem = {};

      @action openDialog = (item) => {

        this.isDialogOpen = true;
        this.portfolioItem = item;
        
      }

      @action closeDialog = () => {
        this.isDialogOpen = false;
        this.portfolioItem = {};
      }

}
 
const store = new PortfolioStore();

export default store;