export type Options = {
    options: 
        {
            id: number,
            name: string,
            image: string,
            children:
                {
                    id: number,
                    name: string,
                    image: string,
                    price: number
                }[]
        }[]
}

export type Ingredient = {
    name: string;   
    type: string;
    cost: number;
}
