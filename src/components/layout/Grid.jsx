import styles from './Grid.module.css';

export default function Grid({ children, cols = 3, className = '' }) {
    const colClass = styles[`cols-${cols}`] || styles['cols-3'];

    return (
        <div className={`${styles.grid} ${colClass} ${className}`}>
            {children}
        </div>
    );
}
