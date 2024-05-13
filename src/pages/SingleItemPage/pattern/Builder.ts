import { SelectedAddition, BasketItemType } from "../../../shared"

export interface Builder{
    addAdditions(additions: SelectedAddition[]): void
    getDrink(): BasketItemType
}