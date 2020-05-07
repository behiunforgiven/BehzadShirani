import { observable , action } from "mobx"

class PortfolioStore{

      @observable isDialogOpen: boolean = false;
      @observable portfolioItem : PortolioItem = null;

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