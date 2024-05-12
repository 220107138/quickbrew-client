import { SingleItem } from "./SingleItem";
import { SingleItemOptions } from "./SingleItemOptions";
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useOrder } from "../../../shared/values/OrderProvider";
import { BasketItemType } from "../../../shared/values/types";

export function SingleItemPage() {
  const { id } = useParams(); 
  const { order, setOrder } = useOrder();
  
  let item: BasketItemType | undefined = order.find((el) => el.id === Number(id));
  let defaultPrice: number | undefined;
  
  if (item) {
      defaultPrice = item.defaultPrice;
  }
  
  const [price, setPrice] = useState<number | undefined>(defaultPrice);
  
  const updatePrice = (change: number) => {
      setPrice(prevPrice => (prevPrice ? prevPrice + change : undefined)); 
  };

  return (
    <div className="w-100 d-flex flex-column flex-md-row" style={{height: '100vh'}}>
      <div className="col-12 col-md-3">
        <SingleItem item={item} price={price}></SingleItem>
      </div>
      <div className="col-12 col-md-9 mt-4">
        <SingleItemOptions updatePrice={updatePrice}></SingleItemOptions>
      </div>
    </div>
  );
}
