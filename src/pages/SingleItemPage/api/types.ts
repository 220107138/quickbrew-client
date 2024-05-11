export type SingleItemResponse = {
    id: number,
    name: string,
    price: number,
    description: string | undefined,
    image_url: string
}

export type SingleItemRequest = {
    id: number
}