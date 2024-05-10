import Button from '../shared/Button';
import { MenuItemResponse } from '../shared/values/types';
import styles from './style_modules/BasketItem.module.css';

function BasketItem(props: {
    item: MenuItemResponse,
    onGreen: (item: MenuItemResponse) => void,
    onBlue: (item: MenuItemResponse) => void,
    onRed: (item: MenuItemResponse) => void
}) {
    return (
        <div className={ styles.root }>
            <div className={ styles.inner }>
                <img
                    src={ props.item.img }
                    alt='selected'
                    height='40px'
                />
                <span className={ styles.name }>
                    { props.item.name }
                </span>
                <span className={ styles.info }>
                    { props.item.type }
                </span>
                <span className={ styles.info }>
                    ${ props.item.price }
                </span>
            </div>

            { props.item.additions.map(add =>
                <div className={ styles.inner }>
                    <span className={ styles.info }>{ add.type }</span>
                    <span className={ styles.info }>{ add.addition }</span>
                    <span className={ styles.info }>{ add.quantity } g</span>
                </div>
            ) }

            <div className={ styles.inner }>
                <Button
                    type='textGreen'
                    onClick={ () => props.onGreen(props.item) }
                >
                    Duplicate
                </Button>
                <Button
                    type='textBlue'
                    onClick={ () => props.onBlue(props.item) }
                >
                    Edit
                </Button>
                <Button
                    type='textRed'
                    onClick={ () => props.onRed(props.item) }
                >
                    Remove
                </Button>
            </div>
        </div>
    );
}

export default BasketItem;