import { Card } from 'primereact/card';
import { SingleItemResponse } from '../api/types';
import { useState } from 'react';


export function SingleItem(props: SingleItemResponse) {
    const [count, setCount] = useState(1);
      const header = (
        <img
          alt="Card"
          style={{ width: '100%' }}
          src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630"
        />
      );
    
      const footer = (
        <Card className='d-flex flex-column'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='w-25 d-flex justify-content-between align-items-center'>
                    <span style={{ borderRadius: '50%', width: '25px', height: '25px', backgroundColor: '#e4e4e4', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}
                    onClick={() => {
                        setCount(count - 1);
                    }}
                    >
                        <i className='pi pi-minus' style={{ color: 'black', fontSize: '10px' }}></i>
                    </span>
                    <span className='fs-5 fw-normal'>{count}</span>
                    <span style={{ borderRadius: '50%', width: '25px', height: '25px', backgroundColor: '#e4e4e4', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}
                    onClick={() => {
                        setCount(count + 1);
                    }}
                    >
                        <i className='pi pi-plus' style={{ color: 'black', fontSize: '10px' }}></i>
                    </span>
                </div>
                <div className='w-50  text-end'>
                    <span className='fs-4 fw-bolder'>
                        {props.price} ТГ
                    </span>
                </div>
            </div>
            <div className='w-100 pt-5'>
                <button className='btn p-2 fs-6 fw-bolder' style={{backgroundColor: '#243832', color: '#e4e4e4', width: '100%'}}>Confirm</button>
            </div>
        </Card>
      )
    
      return (
        <div className='w-100' style={{height: '100vh'}}>
          <Card title={props.name} subTitle={props.description} header={header} footer={footer} className='w-100 h-100 d-flex flex-column justify-content-between'></Card>
        </div>
      );
    }