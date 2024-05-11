import { Builder } from "./Builder";
import { MenuItemResponse } from "../../../shared/values/types";

export class TeaBuilder implements Builder{

    private id: number
    private name: string
    private price: number
    private additions: MenuItemResponse['additions']

    constructor(id: number, name: string, price: number, additions: MenuItemResponse['additions']){
        this.id = id
        this.name = name
        this.price = price
        this.additions = additions
    }

    addMilk(milk: MenuItemResponse['additions'][0]): void {
        this.additions.push(milk);
        this.price += milk.quantity
    }

    addToppings(topping: MenuItemResponse['additions'][0]): void {
        this.additions.push(topping);
        this.price += topping.quantity
    }

    addSugar(sugar: MenuItemResponse['additions'][0]): void {
        this.additions.push(sugar);
        this.price += sugar.quantity
    }

    setSize(size: MenuItemResponse['additions'][0]): void {
        this.additions.push(size);
        this.price += size.quantity
    }
}