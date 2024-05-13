import { AdditionsResourcesResponse } from "../../../shared";
import { CategoryCarousel } from "./CategoryCarousel";
import { useState, useEffect } from "react";
import { SelectedAddition } from "../../../shared";

interface SingleItemOptions {
    additions: SelectedAddition[] | undefined
    updatePrice: (price: number) => void
}

export let selectedAdditions: SelectedAddition[];

export function SingleItemOptions(props: SingleItemOptions){

    const items: AdditionsResourcesResponse = {
        additions: [
            {
                type: 'milk',
                children: [
                    {
                        id: 1,
                        name: 'Cow milk',
                        type: 'milk',
                        price: 0,
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                    },
                    {
                        id: 2,
                        name: 'Cow milk',
                        type: 'milk',
                        price: 400,
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                    },
                    {
                        id: 3,
                        name: 'Cow milk',
                        type: 'milk',
                        price: 400,
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                    },
                    {
                        id: 4,
                        name: 'Cow milk',
                        type: 'milk',
                        price: 400,
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                    },
                    {
                        id: 5,
                        name: 'Cow milk',
                        type: 'milk',
                        price: 400,
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                    },
                    {
                        id: 6,
                        name: 'Cow milk',
                        type: 'milk',
                        price: 400,
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                    },
                    {
                        id: 7,
                        name: 'Cow milk',
                        type: 'milk',
                        price: 400,
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                    },
                ]
            },
            {
                type: 'syrup',
                children: [
                    {
                        id: 1,
                        name: 'Cow milk',
                        type: 'syrup',
                        price: 400,
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                    },
                    {
                        id: 2,
                        name: 'Cow milk',
                        type: 'syrup',
                        price: 400,
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                    },
                    {
                        id: 3,
                        name: 'Cow milk',
                        type: 'syrup',
                        price: 400,
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                    },
                    {
                        id: 4,
                        name: 'Cow milk',
                        type: 'syrup',
                        price: 400,
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                    },
                    {
                        id: 5,
                        name: 'Cow milk',
                        type: 'syrup',
                        price: 400,
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                    },
                    {
                        id: 6,
                        name: 'Cow milk',
                        type: 'syrup',
                        price: 400,
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                    },
                    {
                        id: 7,
                        name: 'Cow milk',
                        type: 'syrup',
                        price: 400,
                        image: 'https://nutritionrefined.com/wp-content/uploads/2017/06/coconut-milk-featured.jpg',
                    },
                ]
            }
        ]
    }
    
    const [selectedItems, setSelectedItems] = useState<SelectedAddition[]>(props.additions ? props.additions : []);

    const handleSelect = (selectedChild: SelectedAddition | null) => {
        if (selectedChild) {
            const existingItemIndex = selectedItems.findIndex(item => item.type === selectedChild.type);
            const existsInList = selectedItems.findIndex(el => el.type === selectedChild.type && el.id === selectedChild.id);
    
            if (existingItemIndex !== -1) {
                const newSelectedItems = [...selectedItems];
                if (existsInList !== -1) {
                    newSelectedItems.splice(existsInList, 1);
                    setSelectedItems(newSelectedItems);
                } else {
                    newSelectedItems[existingItemIndex] = selectedChild;
                    setSelectedItems(newSelectedItems);
                }
            } else {
                setSelectedItems(prevSelectedItems => [...prevSelectedItems, selectedChild]);
            }
        }
    };
    
      
      
  
    useEffect(() => {
        selectedAdditions = selectedItems
        console.log(selectedItems, 'selectedItems')
    }, [selectedItems]);
  
    return (
      <div>
        {items.additions.map((item: any) => (
          <CategoryCarousel
            key={item.id}
            category={item}
            selectedValue={selectedItems.find(selectedItem => selectedItem.type === item.type) || null}
            onSelect={(selectedChild) => handleSelect(selectedChild)}
            updatePrice={props.updatePrice}
          />
        ))}
      </div>
    );
}