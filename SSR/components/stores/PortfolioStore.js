import { observable , action } from "mobx"

class PortfolioStore{

      @observable isDialogOpen = false;
      @observable portfolioItem = null;

      @action openDialog = (item) => {

        this.isDialogOpen = true;
        this.portfolioItem = item;
        
      }

      @action closeDialog = () => {
        this.isDialogOpen = false;
        this.portfolioItem = null;
      }

}

export default PortfolioStore;