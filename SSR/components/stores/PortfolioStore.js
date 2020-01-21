import {observer,useLocalStore} from 'mobx-react'

 const PortfolioStore = observer(() => {
  const store = useLocalStore({
    isDialogOpen: false,
    portfolioItem: null,
    openDialog: (item) => {
      store.isDialogOpen = true;
      store.portfolioItem = item;
    },
    closeDialog: () => {
      store.isDialogOpen = false;
      store.portfolioItem = null;
    }
  })

  return store;
})

export default PortfolioStore;