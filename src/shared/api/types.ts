import { SelectedAddition } from "../values";

export type MenuProductResponse = {
    id: number,
    name: string,
    type: string,
    defaultPrice: number,
    image: string,
    defaultAdditions: SelectedAddition[]
};

export type AdditionsResourcesResponse = {
    additions: 
        {
            type: string,
            children:
                {
                    type: string,
                    id: number,
                    name: string,
                    price: number,
                    image: string
                }[]
        }[]
}

export type AdditionsResourcesRequest = {
    id: number
}

export type MakeOrderRequest = {
    requestData: {
        item_id: Number,
        product_id: Number,
        price: Number,
        size: string,
        toppings_id: number[]
    }[]
}

export type MakeOrderResponse = {
    order_id: Number,
    total_price: Number
}