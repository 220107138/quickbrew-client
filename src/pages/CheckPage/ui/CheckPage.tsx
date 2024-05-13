import { useOrder } from '../../../shared';
import CheckItem from './CheckItem';
import styles from './style_modules/CheckPage.module.css';


function CheckPage() {
    const { order } = useOrder();
    console.log(order)
    let totalPrice: number = 0;
    order.forEach(element => {
        totalPrice += element.priceWithAdditions
        console.log(element.priceWithAdditions, totalPrice, 'totalPrice')
    });

    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{height: '100vh', backgroundColor: '#283c34'}}>
            <div className={styles.border}>
                <main className={styles.root} style={{backgroundColor: '#ffff'}}>
                    <header className='d-flex justify-content-between mb-4 mt-4' style={{borderBottom: '2.5px dashed #666' }}>
                        <span>Order №{1}</span>
                        <span>Date: 13.05.2024 13:50</span>
                    </header>
                    <div className="w-100">
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody className={styles.scrollableBody}>
                            {order.map((basketItem, index) => (
                                <CheckItem key={index} item={basketItem} />
                            ))}
                        </tbody>
                    </table>
                    </div>
                    <footer  className='d-flex justify-content-between mb-4 mt-4' style={{borderTop: '2.5px dashed #666' }}>
                        Total: { totalPrice } ₸
                    </footer>
                </main>
            </div>
            <button className='col-6 col-md-3 m-5 btn' onClick={() => {window.location.href = '/'}}  style={{backgroundColor: '#ffff', color: '#283c34', fontWeight: 'bold'}}>Back To Menu</button>
        </div>
    );
}

export default CheckPage;