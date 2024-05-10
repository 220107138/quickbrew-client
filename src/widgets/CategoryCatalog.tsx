import { useRef, useEffect } from 'react';
import styles from './style_modules/CategoryCatalog.module.css';

function CategoryCatalog(props: {
    category: string,
    children: any
}) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let bgImg;
        switch (props.category) {
            case 'tea':
                bgImg = 'tea';
                break;
                case 'lemonade':
                    bgImg = 'lemonade';
                    break;
                case 'snacks':
                    bgImg = 'snacks';
                    break;
            default:
                bgImg = 'coffee';
        }
        if (cardRef.current)
            cardRef.current.style.backgroundImage = `url(/${bgImg}-bg.png)`;
    }, [props.category]);

    return (
        <section className={ styles.root }>
            <div className={ styles.card }>
                <div ref={ cardRef } className={ styles.layer }></div>
                <h2 className={ styles.category }>{ props.category }</h2>
            </div>
            <div className={ styles.slider }>
                { props.children }
            </div>
        </section>
    );
}

export default CategoryCatalog;
