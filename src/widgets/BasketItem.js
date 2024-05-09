import styles from './style_modules/BasketItem.module.css';

function BasketItem(props) {
    return (
        <div className={ styles.root }>
            <img
                src={ props.img }
                alt='selected'
                height='40px'
            />
            <span className={ styles.name }>
                { props.name }
            </span>
            <span className={ styles.category }>
                { props.category }
            </span>
            <span className={ styles.price }>
                ${ props.price }
            </span>
        </div>
    );
}

export default BasketItem;