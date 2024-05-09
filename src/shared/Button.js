import styles from './style_modules/Button.module.css';

function Button(props) {
    return (
        <button
            className={ styles[props.type] }
            onClick={ props.onClick }
        >
            { props.children }
        </button>
    );
}

export default Button;