import CategoryCatalog from '../../../widgets/CategoryCatalog';
import ItemCard from '../../../widgets/ItemCard';
import Basket from '../../../widgets/Basket';
import BasketItem from '../../../widgets/BasketItem';
import { MenuItemResponse } from '../../../shared/values/types';
import Prototype from '../prtotype/Prototype';
import styles from './MenuPage.module.css';
import { useState } from 'react';

function MenuPage() {
    const [basketItems, setBasketItems] = useState<MenuItemResponse[]>([]); 
    const data: MenuItemResponse[] = [
        {
            id: 0,
            name: 'Latte',
            img: '/img.png',
            type: 'coffee',
            price: 2.99,
            additions: [
                {
                    type: 'milk',
                    id: 1,
                    addition: 'cow_milk',
                    quantity: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    addition: 'just sugar',
                    quantity: 50
                }
            ]
        },
        {
            id: 1,
            name: 'Latte',
            img: '/img.png',
            type: 'coffee',
            price: 2.99,
            additions: [
                {
                    type: 'milk',
                    id: 1,
                    addition: 'cow_milk',
                    quantity: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    addition: 'just sugar',
                    quantity: 50
                }
            ]
        },
        {
            id: 2,
            name: 'Latte',
            img: '/img.png',
            type: 'coffee',
            price: 2.99,
            additions: [
                {
                    type: 'milk',
                    id: 1,
                    addition: 'cow_milk',
                    quantity: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    addition: 'just sugar',
                    quantity: 50
                }
            ]
        },
        {
            id: 3,
            name: 'Latte',
            img: '/img.png',
            type: 'coffee',
            price: 2.99,
            additions: [
                {
                    type: 'milk',
                    id: 1,
                    addition: 'cow_milk',
                    quantity: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    addition: 'just sugar',
                    quantity: 50
                }
            ]
        },
        {
            id: 4,
            name: 'Latte',
            img: '/img.png',
            type: 'coffee',
            price: 2.99,
            additions: [
                {
                    type: 'milk',
                    id: 1,
                    addition: 'cow_milk',
                    quantity: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    addition: 'just sugar',
                    quantity: 50
                }
            ]
        },
        {
            id: 5,
            name: 'Latte',
            img: '/img.png',
            type: 'coffee',
            price: 2.99,
            additions: [
                {
                    type: 'milk',
                    id: 1,
                    addition: 'cow_milk',
                    quantity: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    addition: 'just sugar',
                    quantity: 50
                }
            ]
        },
        {
            id: 6,
            name: 'Latte',
            img: '/img.png',
            type: 'lemonade',
            price: 2.99,
            additions: [
                {
                    type: 'milk',
                    id: 1,
                    addition: 'cow_milk',
                    quantity: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    addition: 'just sugar',
                    quantity: 50
                }
            ]
        },
        {
            id: 7,
            name: 'Latte',
            img: '/img.png',
            type: 'lemonade',
            price: 2.99,
            additions: [
                {
                    type: 'milk',
                    id: 1,
                    addition: 'cow_milk',
                    quantity: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    addition: 'just sugar',
                    quantity: 50
                }
            ]
        },
        {
            id: 8,
            name: 'Latte',
            img: '/img.png',
            type: 'lemonade',
            price: 2.99,
            additions: [
                {
                    type: 'milk',
                    id: 1,
                    addition: 'cow_milk',
                    quantity: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    addition: 'just sugar',
                    quantity: 50
                }
            ]
        },
        {
            id: 9,
            name: 'Latte',
            img: '/img.png',
            type: 'lemonade',
            price: 2.99,
            additions: [
                {
                    type: 'milk',
                    id: 1,
                    addition: 'cow_milk',
                    quantity: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    addition: 'just sugar',
                    quantity: 50
                }
            ]
        },
        {
            id: 10,
            name: 'Latte',
            img: '/img.png',
            type: 'lemonade',
            price: 2.99,
            additions: [
                {
                    type: 'milk',
                    id: 1,
                    addition: 'cow_milk',
                    quantity: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    addition: 'just sugar',
                    quantity: 50
                }
            ]
        }
    ];

    const addItemToBasket = (item: MenuItemResponse) => setBasketItems(
        prevBasketItems => [...prevBasketItems, item]
    );
    const removeItemsFromBasket = (item: MenuItemResponse) => setBasketItems(
        prevBasketItems => prevBasketItems.filter(basketItem => basketItem.id !== item.id)
    );
    const duplicateItemInBasket = (item: MenuItemResponse) => setBasketItems(
        prevBasketItems => [...prevBasketItems, new Prototype<MenuItemResponse>(item).getClone()]
    );
    const removeSingleItemFromBasket = (item: MenuItemResponse) => {
        if (basketItems.filter(basketItem => basketItem.id === item.id).length === 1)
            (document.getElementById(`item-${item.id}`) as HTMLInputElement).checked = false;
        
        setBasketItems(prevBasketItems =>
            prevBasketItems.filter(basketItem => basketItem !== item)
        );
    }

    return (
        <main className={ styles.root }>
            <section className={ styles.catalog }>
                <CategoryCatalog category='Coffee'>
                    { data.filter(drink => drink.type === 'coffee').map(coffee => <ItemCard
                        key={ coffee.id }
                        id={ coffee.id }
                        name={ coffee.name }
                        img={ coffee.img }
                        price={ coffee.price }
                        onTrue={ () => addItemToBasket(coffee) }
                        onFalse={ () => removeItemsFromBasket(coffee) }
                    />) }
                </CategoryCatalog>
                <CategoryCatalog category='tea'>
                    { data.filter(drink => drink.type === 'tea').map(tea => <ItemCard
                        key={ tea.id }
                        id={ tea.id }
                        name={ tea.name }
                        img={ tea.img }
                        price={ tea.price }
                        onTrue={ () => addItemToBasket(tea) }
                        onFalse={ () => removeItemsFromBasket(tea) }
                    />) }
                </CategoryCatalog>
                <CategoryCatalog category='lemonade'>
                    { data.filter(drink => drink.type === 'lemonade').map(lemonade => <ItemCard
                        key={ lemonade.id }
                        id={ lemonade.id }
                        name={ lemonade.name }
                        img={ lemonade.img }
                        price={ lemonade.price }
                        onTrue={ () => addItemToBasket(lemonade) }
                        onFalse={ () => removeItemsFromBasket(lemonade) }
                    />) }
                </CategoryCatalog>
                <CategoryCatalog category='snacks'>
                    { data.filter(drink => drink.type === 'snacks').map(snack => <ItemCard
                        key={ snack.id }
                        id={ snack.id }
                        name={ snack.name }
                        img={ snack.img }
                        price={ snack.price }
                        onTrue={ () => addItemToBasket(snack) }
                        onFalse={ () => removeItemsFromBasket(snack) }
                    />) }
                </CategoryCatalog>
            </section>
            <Basket price={ Math.round(basketItems.reduce((recursion, item) => recursion + item.price, 0) * 100) / 100 }>
                { basketItems.map(item => <BasketItem
                    item={ item }
                    onGreen={ (item) => duplicateItemInBasket(item) }
                    onBlue={ () => console.log('item') }
                    onRed={ (item) => removeSingleItemFromBasket(item) }
                />) }
            </Basket>
        </main>
    );
}

export default MenuPage;

