import { SelectedAddition } from "../../../shared/values/types";
  
export interface Category {
   id: number;
   name: string;
   image: string;
   children: SelectedAddition[];
}
  
export interface CategoryCarouselProps {
    category: Category;
    selectedValue: SelectedAddition | null;
    onSelect: (child: SelectedAddition| null) => void;
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
                    name: string,
                    price: number,
                    image?: string
                }[]
        }[]
}

export type Ingredient = {
    name: string;   
    type: string;
    cost: number;
}
