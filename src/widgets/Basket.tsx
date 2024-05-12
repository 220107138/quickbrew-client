import Button from '../shared/Button';
import styles from './style_modules/Basket.module.css';

function Basket(props: {
    price: number,
    children: any
}) {
    return (
        <section className={ styles.root }>
            <header>
                Your Order
                <span className={ styles.mobile }> ${ props.price }</span>
            </header>
            <div className={ styles.container }>
                { props.children }
            </div>
            <footer>
                <span className={ styles.desktop }>Total: { props.price } ₸</span>
                <Button
                    type='textGreen'
                    onClick={ () => console.log('Thanks! Come again!') }
                >
                    Buy
                </Button>
            </footer>
        </section>
    );
}

export default Basket;