import { MenuItemResponse } from "../../../shared/values/types"

export interface Builder{
    addMilk(milk: MenuItemResponse['additions'][0]): void
    addToppings(topping: MenuItemResponse['additions'][0]): void
    addSugar(sugar: MenuItemResponse['additions'][0]): void
    setSize(topping: MenuItemResponse['additions'][0]): void
}