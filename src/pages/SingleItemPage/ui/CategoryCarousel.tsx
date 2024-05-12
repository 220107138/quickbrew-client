import React, { useState, useEffect } from 'react';
import styles from '../../../widgets/style_modules/CategoryCatalog.module.css';
import { Addition, CategoryCarouselProps } from '../values';

export function CategoryCarousel({ category, selectedValue, onSelect, updatePrice }: CategoryCarouselProps) {

  const handleCardClick = (child: Addition) => {
    onSelect(child);
    if (!selectedValue || selectedValue.type !== child.type) {
      updatePrice(child.quantity);
    } else {
      updatePrice(-selectedValue.quantity + child.quantity);
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
              <p style={{ color: '#243832', fontSize: '16px', fontWeight: 'bold' }}>{child.addition}</p>
            </div>
            <div style={{ color: '#f5f5f5', backgroundColor: '#243832', zIndex: '999', borderRadius: '10px', fontSize: '20px', fontWeight: 'bold', position: 'absolute', bottom: '-25px', right: '-20px', padding: '8px' }}>
              + {child.quantity}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
