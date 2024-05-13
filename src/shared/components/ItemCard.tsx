import { SelectedAddition } from '../values';
import styles from './style_modules/ItemCard.module.css';

export function ItemCard(props: {
    id: number,
    name: string,
    price: number,
    img: string,
    additions: SelectedAddition[]
    onTrue: () => void,
    onFalse: () => void
}) {
    return (
        <label
            htmlFor={ `item-${props.id}` }
            className={ styles.root }
        >
            <div className={ styles.picture }>
                <img src={ props.img } alt='item' />
            </div>
            <span className={ styles.name }>
                { props.name }
            </span>
            <span className={ styles.price }>
                { props.additions.reduce((recursion, addition) => recursion + addition.price, props.price) } ₸
            </span>

            <input
                id={ `item-${props.id}` }
                type='checkbox'
                onChange={ (event: React.ChangeEvent<HTMLInputElement>) => (event.currentTarget as HTMLInputElement).checked ? props.onTrue() : props.onFalse() }
            />
        </label>
    );
}