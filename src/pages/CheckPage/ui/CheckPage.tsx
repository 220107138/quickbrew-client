import { useOrder } from '../../../shared/values/OrderProvider';
import CheckItem from './CheckItem';
import styles from './style_modules/CheckPage.module.css';

function CheckPage() {
    const { order } = useOrder();
    const data = { id: 443, totalPrice: 2232 };

    return (
        <main className={ styles.root }>
            <header>
                Order №{ data.id }
            </header>
            <div className={ styles.body }>
                { order.map(basketItem =>
                    <CheckItem
                        key={ basketItem.id }
                        name={ basketItem.name }
                        type={ basketItem.type }
                        defaultPrice={ basketItem.defaultPrice }
                        additions={ basketItem.additions }
                    />
                ) }
            </div>
            <footer>
                Total: { data.totalPrice } ₸
            </footer>
        </main>
    );
}

export default CheckPage;