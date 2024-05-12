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
            <div className="card" style={{ backgroundColor: '#f5f5f5' }}>
              <img src={child.image} alt={child.type} className='w-100' />
              <p style={{ color: '#243832', fontSize: '16px', fontWeight: 'bold' }}>{child.name}</p>
            </div>
            <div style={{ color: '#f5f5f5', backgroundColor: '#243832', zIndex: '999', borderRadius: '10px', fontSize: '20px', fontWeight: 'bold', position: 'absolute', bottom: '-25px', right: '-20px', padding: '8px' }}>
              + {child.price}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
