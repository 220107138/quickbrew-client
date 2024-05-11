import CategoryCatalog from '../../../widgets/CategoryCatalog';
import ItemCard from '../../../widgets/ItemCard';
import Basket from '../../../widgets/Basket';
import BasketItem from '../../../widgets/BasketItem';
import { MenuProductResponse, BasketItemType } from '../../../shared/values/types';
import Prototype from '../prtotype/Prototype';
import styles from './MenuPage.module.css';
import { useState } from 'react';

function MenuPage() {
    const [basketItems, setBasketItems] = useState<BasketItemType[]>([]);
    const data: MenuProductResponse[] = [
        {
            id: 0,
            name: 'Latte',
            image: '/img.png',
            type: 'coffee',
            defaultPrice: 2.99,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'cow_milk',
                    price: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'just sugar',
                    price: 50
                }
            ]
        },
        {
            id: 1,
            name: 'Latte',
            image: '/img.png',
            type: 'coffee',
            defaultPrice: 2.99,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'cow_milk',
                    price: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'just sugar',
                    price: 50
                }
            ]
        },
        {
            id: 2,
            name: 'Latte',
            image: '/img.png',
            type: 'coffee',
            defaultPrice: 2.99,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'cow_milk',
                    price: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'just sugar',
                    price: 50
                }
            ]
        },
        {
            id: 3,
            name: 'Latte',
            image: '/img.png',
            type: 'coffee',
            defaultPrice: 2.99,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'cow_milk',
                    price: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'just sugar',
                    price: 50
                }
            ]
        },
        {
            id: 4,
            name: 'Latte',
            image: '/img.png',
            type: 'coffee',
            defaultPrice: 2.99,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'cow_milk',
                    price: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'just sugar',
                    price: 50
                }
            ]
        },
        {
            id: 5,
            name: 'Latte',
            image: '/img.png',
            type: 'coffee',
            defaultPrice: 2.99,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'cow_milk',
                    price: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'just sugar',
                    price: 50
                }
            ]
        },
        {
            id: 6,
            name: 'Latte',
            image: '/img.png',
            type: 'lemonade',
            defaultPrice: 2.99,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'cow_milk',
                    price: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'just sugar',
                    price: 50
                }
            ]
        },
        {
            id: 7,
            name: 'Latte',
            image: '/img.png',
            type: 'lemonade',
            defaultPrice: 2.99,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'cow_milk',
                    price: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'just sugar',
                    price: 50
                }
            ]
        },
        {
            id: 8,
            name: 'Latte',
            image: '/img.png',
            type: 'lemonade',
            defaultPrice: 2.99,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'cow_milk',
                    price: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'just sugar',
                    price: 50
                }
            ]
        },
        {
            id: 9,
            name: 'Latte',
            image: '/img.png',
            type: 'lemonade',
            defaultPrice: 2.99,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'cow_milk',
                    price: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'just sugar',
                    price: 50
                }
            ]
        },
        {
            id: 10,
            name: 'Latte',
            image: '/img.png',
            type: 'lemonade',
            defaultPrice: 2.99,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'cow_milk',
                    price: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'just sugar',
                    price: 50
                }
            ]
        },
        {
            id: 11,
            name: 'Latte',
            image: '/img.png',
            type: 'tea',
            defaultPrice: 2.99,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'cow_milk',
                    price: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'just sugar',
                    price: 50
                }
            ]
        },
        {
            id: 12,
            name: 'Latte',
            image: '/img.png',
            type: 'snacks',
            defaultPrice: 2.99,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'cow_milk',
                    price: 50
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'just sugar',
                    price: 50
                }
            ]
        }
    ];

    const generateItemId = () => new Date().getTime() - new Date('2024-05-10T23:00:00').getTime();

    const addItemToBasket = (item: MenuProductResponse) => setBasketItems(
        prevBasketItems => [...prevBasketItems, {
            id: generateItemId(),
            productId: item.id,
            name: item.name,
            type: item.type,
            image: item.image,
            defaultPrice: item.defaultPrice,
            additions: item.defaultAdditions,
            priceWithAdditions: 3
        }]
    );
    const removeItemsFromBasket = (item: MenuProductResponse) => setBasketItems(
        prevBasketItems => prevBasketItems.filter(basketItem => basketItem.productId !== item.id)
    );
    const duplicateItemInBasket = (item: BasketItemType) => {
        const clone = new Prototype<BasketItemType>(item).getClone();
        clone.id = generateItemId();
        setBasketItems(
            prevBasketItems => [...prevBasketItems, clone]
        )
    };
    const removeSingleItemFromBasket = (item: BasketItemType) => {
        if (basketItems.filter(basketItem => basketItem.productId === item.productId).length === 1)
            (document.getElementById(`item-${item.productId}`) as HTMLInputElement).checked = false;
        
        setBasketItems(prevBasketItems =>
            prevBasketItems.filter(basketItem => basketItem.id !== item.id)
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
                        img={ coffee.image }
                        price={ coffee.defaultPrice }
                        onTrue={ () => addItemToBasket(coffee) }
                        onFalse={ () => removeItemsFromBasket(coffee) }
                    />) }
                </CategoryCatalog>
                <CategoryCatalog category='tea'>
                    { data.filter(drink => drink.type === 'tea').map(tea => <ItemCard
                        key={ tea.id }
                        id={ tea.id }
                        name={ tea.name }
                        img={ tea.image }
                        price={ tea.defaultPrice }
                        onTrue={ () => addItemToBasket(tea) }
                        onFalse={ () => removeItemsFromBasket(tea) }
                    />) }
                </CategoryCatalog>
                <CategoryCatalog category='lemonade'>
                    { data.filter(drink => drink.type === 'lemonade').map(lemonade => <ItemCard
                        key={ lemonade.id }
                        id={ lemonade.id }
                        name={ lemonade.name }
                        img={ lemonade.image }
                        price={ lemonade.defaultPrice }
                        onTrue={ () => addItemToBasket(lemonade) }
                        onFalse={ () => removeItemsFromBasket(lemonade) }
                    />) }
                </CategoryCatalog>
                <CategoryCatalog category='snacks'>
                    { data.filter(drink => drink.type === 'snacks').map(snack => <ItemCard
                        key={ snack.id }
                        id={ snack.id }
                        name={ snack.name }
                        img={ snack.image }
                        price={ snack.defaultPrice }
                        onTrue={ () => addItemToBasket(snack) }
                        onFalse={ () => removeItemsFromBasket(snack) }
                    />) }
                </CategoryCatalog>
            </section>
            <Basket price={ Math.round(basketItems.reduce((recursion, item) => recursion + item.defaultPrice, 0) * 100) / 100 }>
                { basketItems.map(item => <BasketItem
                    key={ item.id }
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

