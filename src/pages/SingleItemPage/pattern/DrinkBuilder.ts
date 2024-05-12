import { SelectedAddition } from './../../../shared/values/types';
import { Builder } from "./Builder";
import { BasketItemType } from './../../../shared/values/types';

export class DrinkBuilder implements Builder{

    private drink: BasketItemType

    constructor(drink: BasketItemType){
        this.drink = drink
    }

    addAdditions(additions: SelectedAddition[]): void {
        this.drink.additions = additions
        additions.forEach((addition) =>{
            this.drink.priceWithAdditions += addition.price
        })
    }

    getDrink(){
        return this.drink;
    }
}