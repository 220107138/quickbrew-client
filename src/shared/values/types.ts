export type MenuItemResponse = {
    id: number,
    name: string,
    type: string,
    price: number,
    img: string,
    additions: {
        type: string,
        id: number,
        addition: string,
        quantity: number
    }[]
};