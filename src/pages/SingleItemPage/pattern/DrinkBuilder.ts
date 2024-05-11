import { Builder } from "./Builder";
import { Addition } from "../values";

export class TeaBuilder implements Builder{

    private id: number
    private name: string
    private price: number
    private additions: Addition[]

    constructor(id: number, name: string, price: number, additions: Addition[]){
        this.id = id
        this.name = name
        this.price = price
        this.additions = additions
    }

    addMilk(milk: Addition[][0]): void {
        this.additions.push(milk);
        this.price += milk.quantity
    }

    addToppings(topping: Addition[][0]): void {
        this.additions.push(topping);
        this.price += topping.quantity
    }

    addSugar(sugar: Addition[][0]): void {
        this.additions.push(sugar);
        this.price += sugar.quantity
    }

    setSize(size: Addition[][0]): void {
        this.additions.push(size);
        this.price += size.quantity
    }
}