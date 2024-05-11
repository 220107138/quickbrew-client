import styles from './style_modules/CategoryCatalog.module.css';

function CategoryCatalog(props: {
    category: string,
    children: any
}) {
    const getCategory = (category: string) => {
        if (category === 'tea' || 'lemonade' || 'snacks')
            return props.category;
        else
            return 'coffee';
    }

    return (
        <section className={ styles.root }>
            <div className={ styles.desktopCard }>
                <div
                    className={ styles.layer }
                    style={{ backgroundImage: `url(/${getCategory(props.category)}-bg.png)`}}
                ></div>
                <h2 className={ styles.category }>{ getCategory(props.category) }</h2>
            </div>
            <div className={ styles.slider }>
                <div className={ styles.mobileCard }>
                    <div
                        className={ styles.layer }
                        style={{ backgroundImage: `url(/${getCategory(props.category)}-bg.png)`}}
                    ></div>
                    <h2 className={ styles.category }>{ getCategory(props.category) }</h2>
                </div>
                { props.children }
            </div>
        </section>
    );
}

export default CategoryCatalog;
