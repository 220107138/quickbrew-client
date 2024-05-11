export type MenuProductResponse = {
    id: number,
    name: string,
    type: string,
    defaultPrice: number,
    image: string,
    defaultAdditions: SelectedAddition[]
};

export type BasketItemType = {
    id: number,
    productId: number,
    name: string,
    type: string,
    image: string,
    defaultPrice: number,
    additions: SelectedAddition[],
    priceWithAdditions: number
};

export type SelectedAddition = {
    id: number,
    name: string,
    type: string,
    price: number
};