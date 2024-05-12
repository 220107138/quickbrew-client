import { Card } from 'primereact/card';
import { BasketItemType, SelectedAddition } from '../../../shared/values/types';
import { buildDrink } from '../utils';
import { selectedAdditions } from './SingleItemOptions';
import { Link } from 'react-router-dom';

interface props{
  item: BasketItemType | undefined,
  price: number | undefined
}

export function SingleItem(item: props) {

  const builderFunction = (drink: BasketItemType, additions: SelectedAddition[]) => {
    console.log(buildDrink(drink, additions), 'builder result')
  }

      const header = (
        <div className='col-12 d-flex flex-md-column'>
          <img
            alt="Card"
            className='col-7 col-md-12'
            src={item.item?.image}
          />
          <div className='col-3 col-md-12 d-flex flex-column'>
            <span className='fs-4 fw-bolder m-3'>{item.item?.name}</span>
            <span className='m-3'>{item.item?.name}</span>
          </div>
        </div>
      );
    
      const footer = (
        <Card className='d-flex flex-column'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='w-50  text-end'>
                    <span className='fs-4 fw-bolder'>
                        {item.price} ТГ
                    </span>
                </div>
            </div>
        <div className='w-100 pt-5'>
          <Link to={ '/' }>
            <button className='btn p-2 fs-6 fw-bolder' onClick={() => item.item && builderFunction(item.item, selectedAdditions)}  style={{backgroundColor: '#243832', color: '#e4e4e4', width: '100%'}}>Confirm</button>
          </Link>
        </div>
    </Card>
  )

  return (
    <div className='col-12'>
      <Card header={header} footer={footer} className='w-100 h-100 d-flex flex-column'></Card>
    </div>
  );
}