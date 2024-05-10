import { Card } from 'primereact/card';
import { SingleItemResponse } from '../api/types';
import { useRef } from 'react';

export function usePriceRef() {
  return useRef<number | null>(null);
}

export function SingleItem(props: SingleItemResponse) {
  const price = usePriceRef();
  price.current = props.price
      const header = (
        <div className='col-12 d-flex flex-md-column'>
          <img
            alt="Card"
            className='col-7 col-md-12'
            src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630"
          />
          <div className='col-3 col-md-12 d-flex flex-column'>
            <span className='fs-4 fw-bolder m-3'>{props.name}</span>
            <span className='m-3'>{props.description}</span>
          </div>
        </div>
      );
    
      const footer = (
        <Card className='d-flex flex-column'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='w-50  text-end'>
                    <span className='fs-4 fw-bolder'>
                        {price.current} ТГ
                    </span>
                </div>
            </div>
            <div className='w-100 pt-5'>
                <button className='btn p-2 fs-6 fw-bolder' style={{backgroundColor: '#243832', color: '#e4e4e4', width: '100%'}}>Confirm</button>
            </div>
        </Card>
      )
    
      return (
        <div className='col-12'>
          <Card header={header} footer={footer} className='w-100 h-100 d-flex flex-column'></Card>
        </div>
      );
    }