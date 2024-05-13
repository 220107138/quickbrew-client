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
    price: number,
    image? : string
};