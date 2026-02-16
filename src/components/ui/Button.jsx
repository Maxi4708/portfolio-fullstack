import styles from './Button.module.css';

export default function Button({
    children,
    variant = 'primary',
    href,
    className = '',
    ...props
}) {
    const Component = href ? 'a' : 'button';
    const combinedClassName = `${styles.button} ${styles[variant]} ${className}`;

    return (
        <Component
            href={href}
            className={combinedClassName}
            {...props}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
        >
            {children}
        </Component>
    );
}
