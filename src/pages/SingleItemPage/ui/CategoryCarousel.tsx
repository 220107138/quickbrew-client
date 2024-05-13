import styles from '../../../widgets/style_modules/CategoryCatalog.module.css';
import { CategoryCarouselProps } from '../values';
import { SelectedAddition } from '../../../shared/values/types';

export function CategoryCarousel({ category, selectedValue, onSelect, updatePrice }: CategoryCarouselProps) {

  const handleCardClick = (child: SelectedAddition) => {
    if(!selectedValue){
      onSelect(child)
      updatePrice(child.price)
    } else if(selectedValue && selectedValue.id !== child.id){
      onSelect(child)
      updatePrice(-selectedValue.price)
      updatePrice(child.price)
    } else if(selectedValue && selectedValue.id === child.id){
      console.log('to remoove')
      onSelect(child)
      updatePrice(-child.price)
    }
  };


  return (
    <main>
      <div className={styles.slider} style={{paddingBottom: '30px'}}>
        {category.children.map((child) => (
          <div
            key={child.id}
            style={{
              width: '300px',
              position: 'relative',
              border: selectedValue && selectedValue.id === child.id ? '2px solid #243832' : '2px solid transparent',
              cursor: 'pointer',
              borderRadius: '6px'
            }}
            onClick={() => handleCardClick(child)}
          >
            <div className={styles.desktopCard} style={{ backgroundColor: '#f5f5f5', flexDirection: 'column' }}>
              <img src={child.image} alt={child.type} className='w-100' />
              <p style={{ color: '#243832', fontSize: '16px', fontWeight: 'bold' }}>{child.name}</p>
            </div>
            <div className={child.price > 0? 'p-1 p-md-2' : 'd-none'} style={{ color: '#f5f5f5', backgroundColor: '#243832', zIndex: '999', borderRadius: '20px', fontWeight: 'bold', position: 'absolute', bottom: '-25px', right: '-20px' }}>
              + {child.price}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
