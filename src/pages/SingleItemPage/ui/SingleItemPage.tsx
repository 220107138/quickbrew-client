import { SingleItem } from "./SingleItem";
import { SingleItemOptions } from "./SingleItemOptions";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useOrder } from "../../../shared/values/OrderProvider";

export function SingleItemPage() {
  const { id } = useParams(); 

  const [price, setPrice] = useState<number>(990);

  const updatePrice = (change: number) => {
    setPrice(prevPrice => prevPrice + change); 
  };

  const { order, setOrder } = useOrder();
  useEffect(() => console.log(order), [order]);

  return (
    <div className="w-100 d-flex flex-column flex-md-row" style={{height: '100vh'}}>
      <div className="col-12 col-md-3">
        <SingleItem id={Number(id)} updatePrice={updatePrice} price={price}></SingleItem>
      </div>
      <div className="col-12 col-md-9 mt-4">
        <SingleItemOptions updatePrice={updatePrice}></SingleItemOptions>
      </div>
    </div>
  );
}
