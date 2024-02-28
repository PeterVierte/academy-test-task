import {makeAutoObservable} from "mobx";
import showWarning from "../utils/notifications";

class Store {
    cart = [];

    get cartAmount() {
        return this.cart.length;
    }


    addProductToCart = (product) =>  {
        const isInCart = this.cart.some(item => item.id === product.id);

        if(isInCart) {
            showWarning('Товар уже добавлен в корзину');
            return;
        }

        this.cart.push(product);

    }

    removeProductFromCart = (product) => {
        this.cart = this.cart.filter(item => item.id !== product.id);
    }
    constructor() {
        makeAutoObservable(this);
    }
}

export default new Store();