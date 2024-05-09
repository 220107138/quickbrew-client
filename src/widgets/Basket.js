import styles from './style_modules/Basket.module.css';

function Basket(props) {
    return (
        <section
            className={ styles.root }
            style={ props.style }
        >
            <header>Order №{ props.orderId }</header>
            <div className={ styles.container }>
                { props.children }
            </div>
            <footer>Total: ${ props.price }</footer>
        </section>
    );
}

export default Basket;