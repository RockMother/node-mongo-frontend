import BaseStore from "./baseStore";

class CategoriesStore extends BaseStore {
    constructor(){
        super();
        this.categories =  ['Art', 'Store', 'Contacts', 'Settings', 'Templates'];
    }
    getCategories(){
        return this.categories;
    }
}

export default new CategoriesStore();