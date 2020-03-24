interface  PortolioItem {
    id: number,
    title:string,
    date:string,
    category: Category,
}

enum Category{ Web , Mobile , Desktop }