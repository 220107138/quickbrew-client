import { SelectedAddition } from "../../../shared";
  
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

export type Ingredient = {
    name: string;   
    type: string;
    cost: number;
}
