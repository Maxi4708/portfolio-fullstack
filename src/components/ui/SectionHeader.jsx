import styles from './SectionHeader.module.css';

export default function SectionHeader({ title, subtitle, align = 'center', className = '' }) {
    return (
        <div className={`${styles.header} ${styles[align]} ${className}`}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
    );
}
