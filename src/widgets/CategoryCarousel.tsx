import './style_modules/CategoryCatalog.css';

export function CategoryCarousel({ category }: { category: any }) {
    return (
      <main className='root'>
        <div className='card'>
          <div style={{ backgroundImage: `url(${category.image})` }} className='layer'></div>
          <h2 className='category'>{category.name}</h2>
        </div>
        <div className='slider'>
          {category.children.map((child: any) => (
            <div key={child.id} style={{ backgroundImage: `url(${child.image})`, width: '400px', height: 'auto' }}>
              <p>{child.name}, {child.price}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }

