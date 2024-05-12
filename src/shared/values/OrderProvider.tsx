import { ReactNode, createContext, useContext, useState } from 'react';
import { BasketItemType } from './types';

interface OrderContextType extends Iterable<BasketItemType> {
    order: BasketItemType[];
    setOrder: React.Dispatch<React.SetStateAction<BasketItemType[]>>;
};

const OrderContext = createContext<OrderContextType>({
    order: [],
    setOrder: () => {},
    [Symbol.iterator]: () => ({
        next: () => ({ value: undefined, done: true })
    })
});

export const useOrder = () => useContext(OrderContext);

function OrderProvider({ children }: {children: ReactNode}) {
    const [order, setOrder] = useState<BasketItemType[]>([]);

    return (
        <OrderContext.Provider value={{
            order,
            setOrder,
            [Symbol.iterator]: () => order[Symbol.iterator]()
        }}>
            { children }
        </OrderContext.Provider>
    );
};

export default OrderProvider;