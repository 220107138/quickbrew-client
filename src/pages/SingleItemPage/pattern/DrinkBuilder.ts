import { SelectedAddition, BasketItemType } from './../../../shared';
import { Builder } from "./Builder";

export class DrinkBuilder implements Builder{

    private drink: BasketItemType

    constructor(drink: BasketItemType){
        this.drink = drink
    }

    addAdditions(additions: SelectedAddition[]): void {
        this.drink.additions = additions
        this.setPrice(additions)
    }

    setPrice(additions: SelectedAddition[]){
        let totalPrice = this.drink.defaultPrice;
        additions.forEach((addition) => totalPrice += addition.price)
        this.drink.priceWithAdditions = totalPrice
    }

    getDrink(){
        return this.drink;
    }
}