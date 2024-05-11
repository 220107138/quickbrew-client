import { Addition } from "../values"

export interface Builder{
    addMilk(milk: Addition): void
    addToppings(topping: Addition): void
    addSugar(sugar: Addition): void
    setSize(topping: Addition): void
}