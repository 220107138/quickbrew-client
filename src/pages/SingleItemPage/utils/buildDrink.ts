import { SelectedAddition , BasketItemType } from './../../../shared/values/types'
import { DrinkBuilder } from '../pattern/DrinkBuilder'

export const buildDrink = (drink: BasketItemType, additons: SelectedAddition[]) =>{
    const builder = new DrinkBuilder(drink)
    builder.addAdditions(additons);
    return builder.getDrink()
}