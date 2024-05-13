import { SelectedAddition } from '../../../shared/values/types';
import styles from './style_modules/CheckItem.module.css';
import { BasketItemType } from '../../../shared/values/types';

interface CheckItemType{
    item: BasketItemType,
    key: number
}
function CheckItem(props: CheckItemType) {
    return (
        <tr>
            <td className='col-9 d-flex'>
                <img src={props.item.image} style={{marginRight: '10px'}} className='w-25' alt={props.item.name} />
                <span>{props.item.name} with {props.item.additions.map(el => el.name + ' ')}</span>
            </td>
            <td>
                <span>{props.item.priceWithAdditions}</span>
            </td>
        </tr>
    )
}

export default CheckItem;