import { Dispatch, SetStateAction } from "react";
import { BasketItemType, MenuProductResponse } from "../../../shared";
import { generateItemId } from "./generateItemId";

export const addItemToBasket = (item: MenuProductResponse, setOrder: Dispatch<SetStateAction<BasketItemType[]>>) => setOrder(
    prevOrder => [...prevOrder, {
        id: generateItemId(),
        productId: item.id,
        name: item.name,
        type: item.type,
        image: item.image,
        defaultPrice: item.defaultPrice,
        additions: item.defaultAdditions,
        priceWithAdditions: item.defaultAdditions.reduce((recursion, addition) => recursion + addition.price, item.defaultPrice)
    }]
);