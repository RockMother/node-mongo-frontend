import BaseStore from "./baseStore";

class CategoriesStore extends BaseStore {
    constructor(){
        super();
        this.categories =  ['Art', 'Store', 'Contacts', 'Settings'];
    }
    getCategories(){
        return this.categories;
    }
}

export default new CategoriesStore();