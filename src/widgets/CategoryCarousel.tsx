import React, { useState, useEffect } from 'react';
import './style_modules/CategoryCatalog.css';

export interface Child {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface Category {
  id: number;
  name: string;
  image: string;
  children: Child[];
}

interface CategoryCarouselProps {
  category: Category;
  selectedValue: Child | null;
  onSelect: (child: Child | null) => void;
}

export function CategoryCarousel({ category, selectedValue, onSelect }: CategoryCarouselProps) {
  const handleCardClick = (child: Child) => {
    onSelect(selectedValue && selectedValue.id === child.id ? null : child);
  };

  return (
    <main>
      <div className='slider'>
        {category.children.map((child) => (
          <div
            key={child.id}
            style={{
              width: '300px',
              position: 'relative',
              border: selectedValue && selectedValue.id === child.id ? '2px solid #243832' : '2px solid transparent',
              cursor: 'pointer',
              borderRadius: '10px'
            }}
            onClick={() => handleCardClick(child)}
          >
            <div className='card' style={{ backgroundColor: '#f5f5f5' }}>
              <img src={child.image} alt={child.name} className='w-100' />
              <p style={{ color: '#243832', fontSize: '16px', fontWeight: 'bold' }}>{child.name}</p>
            </div>
            <div style={{ color: '#f5f5f5', backgroundColor: '#243832', borderRadius: '10px', fontSize: '20px', fontWeight: 'bold', position: 'absolute', bottom: '-25px', right: '-20px', padding: '8px' }}>
              + {child.price}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}