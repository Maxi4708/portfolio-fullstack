import styles from './Button.module.css';
import { motion } from 'framer-motion';

export default function Button({
    children,
    variant = 'primary',
    href,
    className = '',
    ...props
}) {
    // Generate the correct motion component based on href presence
    const Component = href ? motion.a : motion.button;
    const combinedClassName = `${styles.button} ${styles[variant]} ${className}`;

    return (
        <Component
            href={href}
            className={combinedClassName}
            {...props}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </Component>
    );
}

