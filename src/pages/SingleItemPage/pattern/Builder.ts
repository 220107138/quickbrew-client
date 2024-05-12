import { SelectedAddition } from "../../../shared/values/types"
import { BasketItemType } from "../../../shared/values/types"

export interface Builder{
    addAdditions(additions: SelectedAddition[]): void
    getDrink(): BasketItemType
}