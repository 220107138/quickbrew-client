import { SelectedAddition } from '../../../shared/values/types';
import styles from './style_modules/CheckItem.module.css';

function CheckItem(props: {
    name: string;
    type: string;
    defaultPrice: number;
    additions: SelectedAddition[];
}) {
    return (
        <div className={ styles.root }>
            
        </div>
    );
}

export default CheckItem;