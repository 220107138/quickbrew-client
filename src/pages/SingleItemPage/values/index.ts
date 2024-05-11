import { MenuItemResponse } from "../../../shared/values/types"

export type Options = {
    options: 
        {
            id: number,
            name: string,
            image: string,
            children:
                {
                    type: string,
                    id: number,
                    addition: string,
                    quantity: number,
                    image?: string
                }[]
        }[]
}

export type Ingredient = {
    name: string;   
    type: string;
    cost: number;
}

export let singleItem: MenuItemResponse = {
    id: 1,
    name: 'Latte',
    type: 'coffee',
    price: 990,
    description: 'latte description',
    img: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',
    additions: [
        {
            type: 'milk',
            id: 1,
            addition: 'Cow milk',
            quantity: 0
        }
    ]
}
