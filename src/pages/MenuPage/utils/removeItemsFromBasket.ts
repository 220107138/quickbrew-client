import { Dispatch, SetStateAction } from "react";
import { BasketItemType, MenuProductResponse } from "../../../shared";

export const removeItemsFromBasket = (item: MenuProductResponse, setOrder: Dispatch<SetStateAction<BasketItemType[]>>) => setOrder(
    prevOrder => prevOrder.filter(basketItem => basketItem.productId !== item.id)
);