export type MenuItemResponse = {
    id: number,
    name: string,
    type: string,
    price: number,
    description?: string,
    img: string,
    additions: {
        type: string,
        id: number,
        addition: string,
        quantity: number,
        image?: string
    }[]
};