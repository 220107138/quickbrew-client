import styles from './style_modules/Basket.module.css';

function Basket(props: {
    price: number,
    children: any
}) {
    return (
        <section className={ styles.root }>
            <header>Your Order</header>
            <div className={ styles.container }>
                { props.children }
            </div>
            <footer>Total: ${ props.price }</footer>
        </section>
    );
}

export default Basket;