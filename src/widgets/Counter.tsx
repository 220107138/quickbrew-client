import { useRef, useState } from 'react';
import Button from '../shared/Button';
import styles from './style_modules/Counter.module.css';

function Counter(props: {max: number}) {
    const [countValue, setCountValue] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);
    
    const decrease = () => {
        if (countValue === 0)
            return;
        
        setCountValue(prevCountValue => {
            const newCountValue = prevCountValue - 1;
            if (countRef.current)
                countRef.current.textContent = newCountValue.toString();

            if (newCountValue === 0 && rootRef.current)
                rootRef.current.className = rootRef.current.className.replace(` ${styles['selected']}`, '');

            return newCountValue;
        });
    }
    
    const increase = () => {
        if (props.max && countValue === props.max)
            return;
        
        setCountValue(prevCountValue => {
            const newCountValue = prevCountValue + 1;
            if (countRef.current)
                countRef.current.textContent = newCountValue.toString();

            if (newCountValue === 1 && rootRef.current)
                rootRef.current.className += ` ${styles['selected']}`;

            return newCountValue;
        });
    }

    return (
        <div ref={ rootRef } className={ styles.root }>
            <Button
                type={ countValue > 0 ? 'icon' : 'disabledIcon' }
                onClick={ decrease }
            >
                <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill={ countValue > 0 ? '#e4e4e4' : '#666' }></path> </g></svg>
            </Button>
            <span ref={ countRef } className={ styles.count }>
                { countValue }
            </span>
            <Button
                type={ !props.max || countValue < props.max ? 'icon' : 'disabledIcon'}
                onClick={ increase }
            >
                <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill={ countValue > 0 ? '#e4e4e4' : '#666' }></path> </g></svg>
            </Button>
        </div>
    );
}

export default Counter;