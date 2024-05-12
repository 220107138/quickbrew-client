import { Link } from 'react-router-dom';
import Button from '../shared/Button';
import { BasketItemType } from '../shared/values/types';
import styles from './style_modules/BasketItem.module.css';

function BasketItem(props: {
    item: BasketItemType,
    onGreen: (item: BasketItemType) => void,
    onRed: (item: BasketItemType) => void
}) {
    return (
        <div className={ styles.root }>
            <div className={ styles.inner }>
                <img
                    src={ props.item.image }
                    alt={ props.item.name }
                />
                <span className={ styles.name }>
                    { props.item.name }
                </span>
                <span className={ styles.info }>
                    { props.item.type }
                </span>
                <span className={ styles.info }>
                    { props.item.defaultPrice } ₸
                </span>
            </div>

            {
                props.item.additions.map(addition =>
                    <div className={ styles.inner }>
                        <span className={ styles.info }>{ addition.type }</span>
                        <span className={ styles.info }>{ addition.name }</span>
                        <span className={ styles.info }>{ addition.price }</span>
                    </div>
                )
            }

            <div className={ styles.inner }>
                <Button
                    type='textGreen'
                    onClick={ () => props.onGreen(props.item) }
                >
                    Duplicate
                </Button>
                <Link to={ `/singleItem/${props.item.id}` }>
                    <Button
                        type='textBlue'
                        onClick={ () => console.log('Wait...') }
                    >
                        Edit
                    </Button>
                </Link>
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