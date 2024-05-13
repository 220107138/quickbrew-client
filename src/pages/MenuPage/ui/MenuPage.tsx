import { ItemCard, CategoryCatalog, Basket, BasketItem, MenuProductResponse, BasketItemType, useOrder } from '../../../shared';
import styles from './MenuPage.module.css';
import { useEffect } from 'react';
import { addItemToBasket, removeItemsFromBasket, duplicateItemInBasket, removeSingleItemFromBasket } from '../utils';

function MenuPage() {
    const { order, setOrder } = useOrder();
    const data: MenuProductResponse[] = [
        {
            id: 0,
            name: 'Latte',
            image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',
            type: 'coffee',
            defaultPrice: 1000,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'Cow Milk',
                    price: 0
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'Just Sugar',
                    price: 0
                }
            ]
        },
        {
            id: 1,
            name: 'Latte',
            image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',
            type: 'coffee',
            defaultPrice: 1000,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'Cow Milk',
                    price: 0
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'Just Sugar',
                    price: 0
                }
            ]
        },
        {
            id: 2,
            name: 'Latte',
            image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',
            type: 'coffee',
            defaultPrice: 1000,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'Cow Milk',
                    price: 0
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'Just Sugar',
                    price: 0
                }
            ]
        },
        {
            id: 3,
            name: 'Latte',
            image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',
            type: 'coffee',
            defaultPrice: 1000,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'Cow Milk',
                    price: 0
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'Just Sugar',
                    price: 0
                }
            ]
        },
        {
            id: 4,
            name: 'Latte',
            image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',
            type: 'coffee',
            defaultPrice: 1000,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'Cow Milk',
                    price: 0
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'Just Sugar',
                    price: 0
                }
            ]
        },
        {
            id: 5,
            name: 'Latte',
            image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',
            type: 'coffee',
            defaultPrice: 1000,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'Cow Milk',
                    price: 0
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'Just Sugar',
                    price: 0
                }
            ]
        },
        {
            id: 6,
            name: 'Latte',
            image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',
            type: 'lemonade',
            defaultPrice: 1000,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'Cow Milk',
                    price: 0
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'Just Sugar',
                    price: 0
                }
            ]
        },
        {
            id: 7,
            name: 'Latte',
            image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',
            type: 'lemonade',
            defaultPrice: 1000,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'Cow Milk',
                    price: 0
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'Just Sugar',
                    price: 0
                }
            ]
        },
        {
            id: 8,
            name: 'Latte',
            image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',
            type: 'lemonade',
            defaultPrice: 1000,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'Cow Milk',
                    price: 0
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'Just Sugar',
                    price: 0
                }
            ]
        },
        {
            id: 9,
            name: 'Latte',
            image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',
            type: 'lemonade',
            defaultPrice: 1000,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'Cow Milk',
                    price: 0
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'Just Sugar',
                    price: 0
                }
            ]
        },
        {
            id: 10,
            name: 'Latte',
            image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',
            type: 'lemonade',
            defaultPrice: 1000,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'Cow Milk',
                    price: 0
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'Just Sugar',
                    price: 0
                }
            ]
        },
        {
            id: 11,
            name: 'Latte',
            image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630',
            type: 'tea',
            defaultPrice: 1000,
            defaultAdditions: [
                {
                    type: 'milk',
                    id: 1,
                    name: 'Cow Milk',
                    price: 0
                },
                {
                    type: 'sugar',
                    id: 1,
                    name: 'Just Sugar',
                    price: 0
                }
            ]
        }
    ];

    useEffect(() => {
        order.forEach(basketItem => (document.getElementById(`item-${basketItem.productId}`) as HTMLInputElement).checked = true);
    }, [order]);


    return (
        <main className={ styles.root }>
            <section className={ styles.catalog }>
                <CategoryCatalog category='Coffee'>
                    { data.filter(drink => drink.type === 'coffee').map(coffee =>
                        <ItemCard
                            key={ coffee.id }
                            id={ coffee.id }
                            name={ coffee.name }
                            img={ coffee.image }
                            price={ coffee.defaultPrice }
                            additions={ coffee.defaultAdditions }
                            onTrue={ () => addItemToBasket(coffee, setOrder) }
                            onFalse={ () => removeItemsFromBasket(coffee, setOrder) }
                        />
                    ) }
                </CategoryCatalog>
                <CategoryCatalog category='tea'>
                    { data.filter(drink => drink.type === 'tea').map(tea =>
                        <ItemCard
                            key={ tea.id }
                            id={ tea.id }
                            name={ tea.name }
                            img={ tea.image }
                            price={ tea.defaultPrice }
                            additions={ tea.defaultAdditions }
                            onTrue={ () => addItemToBasket(tea, setOrder) }
                            onFalse={ () => removeItemsFromBasket(tea, setOrder) }
                        />
                    ) }
                </CategoryCatalog>
                <CategoryCatalog category='lemonade'>
                    { data.filter(drink => drink.type === 'lemonade').map(lemonade =>
                        <ItemCard
                            key={ lemonade.id }
                            id={ lemonade.id }
                            name={ lemonade.name }
                            img={ lemonade.image }
                            price={ lemonade.defaultPrice }
                            additions={ lemonade.defaultAdditions }
                            onTrue={ () => addItemToBasket(lemonade, setOrder) }
                            onFalse={ () => removeItemsFromBasket(lemonade, setOrder) }
                        />
                    ) }
                </CategoryCatalog>
                <CategoryCatalog category='snacks'>
                    { data.filter(drink => drink.type === 'snacks').map(snack =>
                        <ItemCard
                            key={ snack.id }
                            id={ snack.id }
                            name={ snack.name }
                            img={ snack.image }
                            price={ snack.defaultPrice }
                            additions={ snack.defaultAdditions }
                            onTrue={ () => addItemToBasket(snack, setOrder) }
                            onFalse={ () => removeItemsFromBasket(snack, setOrder) }
                        />
                    ) }
                </CategoryCatalog>
            </section>
            <Basket price={ order.reduce((recursion, item) => recursion + item.priceWithAdditions, 0) }>
                { order.map((item: BasketItemType) =>
                    <BasketItem
                        key={ item.id }
                        item={ item }
                        onGreen={ item => duplicateItemInBasket(item, setOrder) }
                        onRed={ item => removeSingleItemFromBasket(item, order, setOrder) }
                    />
                ) }
            </Basket>
        </main>
    );
}

export default MenuPage;

