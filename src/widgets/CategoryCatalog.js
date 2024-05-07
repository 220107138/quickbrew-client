import styles from './style_modules/CategoryCatalog.module.css';

function CategoryCatalog(props) {
    return (
        <main style={ styles.root }>
            <h2 style={ styles.category }>
                { props.category }
            </h2>
            <div style={ styles.slider }>
                { props.children3 }
            </div>
        </main>
    )
}

export default CategoryCatalog;
