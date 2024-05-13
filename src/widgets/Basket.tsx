import Button from '../shared/Button';
import styles from './style_modules/Basket.module.css';
import { Link } from 'react-router-dom';

function Basket(props: {
    price: number,
    children: any
}) {
    const renderBuyButton = () => props.price > 0 ? (
        <Link to={'/check'}>
        <Button
            type='textGreen'
            onClick={ () => console.log('Thanks! Come again!') }
        >
            Buy
        </Button>
        </Link>
    ) : null;

    return (
        <section className={ styles.root }>
            <header>
                Your Order
                <span className={ styles.mobile }> { props.price } ₸</span>
            </header>
            <div className={ styles.container }>
                { props.children }
            </div>
            <footer>
                <span className={ styles.desktop }>Total: { props.price } ₸</span>
                { renderBuyButton() }
            </footer>
        </section>
    );
}

export default Basket;