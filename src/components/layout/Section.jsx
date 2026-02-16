import styles from './Section.module.css';

export default function Section({
    id,
    children,
    className = '',
    alternate = false
}) {
    return (
        <section
            id={id}
            className={`${styles.section} ${alternate ? styles.sectionAlternate : ''} ${className}`}
        >
            <div className={styles.container}>
                {children}
            </div>
        </section>
    );
}
