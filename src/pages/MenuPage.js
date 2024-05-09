import CategoryCatalog from '../widgets/CategoryCatalog';
import ItemCard from '../widgets/ItemCard';
import Basket from '../widgets/Basket';
import BasketItem from '../widgets/BasketItem';
import styles from './style_modules/MenuPage.module.css';
import { useState } from 'react';

function MenuPage(props) {
    const [basketItems, setBasketItems] = useState([]); 
    const data = [
        {
            id: 0,
            name: 'Latte',
            img: '/img.png',
            category: 'coffee',
            price: '2.99'
        },
        {
            id: 1,
            name: 'Latte',
            img: '/img.png',
            category: 'coffee',
            price: '2.99'
        },
        {
            id: 2,
            name: 'Latte',
            img: '/img.png',
            category: 'coffee',
            price: '2.99'
        },
        {
            id: 3,
            name: 'Latte',
            img: '/img.png',
            category: 'coffee',
            price: '2.99'
        },
        {
            id: 4,
            name: 'Latte',
            img: '/img.png',
            category: 'coffee',
            price: '2.99'
        },
        {
            id: 5,
            name: 'Latte',
            img: '/img.png',
            category: 'coffee',
            price: '2.99'
        },
        {
            id: 6,
            name: 'Latte',
            img: '/img.png',
            category: 'lemonade',
            price: '2.99'
        },
        {
            id: 7,
            name: 'Latte',
            img: '/img.png',
            category: 'lemonade',
            price: '2.99'
        },
        {
            id: 8,
            name: 'Latte',
            img: '/img.png',
            category: 'lemonade',
            price: '2.99'
        },
        {
            id: 9,
            name: 'Latte',
            img: '/img.png',
            category: 'lemonade',
            price: '2.99'
        },
        {
            id: 10,
            name: 'Latte',
            img: '/img.png',
            category: 'lemonade',
            price: '2.99'
        }
    ];

    const addItemToBasket = item => setBasketItems(
        prevBasketItems => [...prevBasketItems, item]
    );
    const removeItemFromBasket = item => setBasketItems(
        prevBasketItems => prevBasketItems.filter(basketItem => basketItem.id !== item.id)
    );

    return (
        <main className={ styles.root }>
            <section className={ styles.catalog }>
                <CategoryCatalog category='Coffee'>
                    { data.filter(drink => drink.category === 'coffee').map(coffee => <ItemCard
                        itemId={ coffee.id }
                        name={ coffee.name }
                        img={ coffee.img }
                        price={ coffee.price }
                        onTrue={ () => addItemToBasket(coffee) }
                        onFalse={ () => removeItemFromBasket(coffee) }
                    />) }
                </CategoryCatalog>
                <CategoryCatalog category='tea'>
                    { data.filter(drink => drink.category === 'tea').map(tea => <ItemCard
                        itemId={ tea.id }
                        name={ tea.name }
                        img={ tea.img }
                        price={ tea.price }
                        onTrue={ () => addItemToBasket(tea) }
                        onFalse={ () => removeItemFromBasket(tea) }
                    />) }
                </CategoryCatalog>
                <CategoryCatalog category='lemonade'>
                    { data.filter(drink => drink.category === 'lemonade').map(lemonade => <ItemCard
                        itemId={ lemonade.id }
                        name={ lemonade.name }
                        img={ lemonade.img }
                        price={ lemonade.price }
                        onTrue={ () => addItemToBasket(lemonade) }
                        onFalse={ () => removeItemFromBasket(lemonade) }
                    />) }
                </CategoryCatalog>
                <CategoryCatalog category='snacks'>
                    { data.filter(drink => drink.category === 'snacks').map(snack => <ItemCard
                        itemId={ snack.id }
                        name={ snack.name }
                        img={ snack.img }
                        price={ snack.price }
                        onTrue={ () => addItemToBasket(snack) }
                        onFalse={ () => removeItemFromBasket(snack) }
                    />) }
                </CategoryCatalog>
            </section>
            <Basket orderId='234' price='299'>
                { basketItems.map(item => <BasketItem
                    id={ item.id }
                    name={ item.name }
                    img={ item.img }
                    category={ item.category }
                    price={ item.price }                    
                />) }
            </Basket>
        </main>
    );
}

export default MenuPage;

