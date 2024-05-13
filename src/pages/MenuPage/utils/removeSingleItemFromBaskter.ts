import { Dispatch, SetStateAction } from "react";
import { BasketItemType } from "../../../shared";

export const removeSingleItemFromBasket = (item: BasketItemType, order: BasketItemType[], setOrder: Dispatch<SetStateAction<BasketItemType[]>>) => {
    if (order.filter(basketItem => basketItem.productId === item.productId).length === 1)
        (document.getElementById(`item-${item.productId}`) as HTMLInputElement).checked = false;
    
    setOrder(prevOrder =>
        prevOrder.filter(basketItem => basketItem.id !== item.id)
    );
};