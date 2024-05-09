import styles from './style_modules/ItemCard.module.css';

function ItemCard(props) {
    return (
        <label
            htmlFor={ `item-${props.itemId}` }
            className={ styles.root }
            onClick={ event => event.target.checked ? props.onTrue() : props.onFalse() }
        >
            <div className={ styles.picture }>
                <img src={ props.img } alt='product' width='125px' />
            </div>
            <span className={ styles.name }>
                { props.name }
            </span>
            <span className={ styles.price }>
                ${ props.price }
            </span>

            <input id={ `item-${props.itemId}` } type='checkbox' />
        </label>
    );
}

export default ItemCard;