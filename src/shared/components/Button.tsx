import styles from './style_modules/Button.module.css';

export function Button(props: {
    type: string,
    onClick: () => void,
    children: any
}) {
    return (
        <button
            className={ styles[props.type] }
            onClick={ props.onClick }
        >
            { props.children }
        </button>
    );
}