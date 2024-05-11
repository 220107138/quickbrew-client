export interface Addition {
    type: string;
    id: number;
    addition: string;
    quantity: number;
    image?: string
  }

export type TransformedAdditions = {
    [key: string]: Addition;
}
  
export interface Category {
   id: number;
   name: string;
   image: string;
   children: Addition[];
}
  
export interface CategoryCarouselProps {
    category: Category;
    selectedValue: Addition | null;
    onSelect: (child: Addition| null) => void;
    updatePrice: (price: number) => void;
}

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
