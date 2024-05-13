import { Dispatch, SetStateAction } from "react";
import { BasketItemType } from "../../../shared";
import Prototype from "../prtotype/Prototype";
import { generateItemId } from "./generateItemId";

export const duplicateItemInBasket = (item: BasketItemType, setOrder: Dispatch<SetStateAction<BasketItemType[]>>) => {
    const clone = new Prototype<BasketItemType>(item).getClone();
    clone.id = generateItemId();
    setOrder(
        prevOrder => [...prevOrder, clone]
    )
};