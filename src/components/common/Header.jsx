import styles from './Layout.module.css';
import Container from '../layout/Container';

export default function Header() {
    const navItems = [
        { label: 'Sobre Mí', href: '#about' },
        { label: 'Filosofía', href: '#philosophy' },
        { label: 'Tecnologías', href: '#skills' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Contacto', href: '#cta' }, // Changed to #cta as discussed
    ];

    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <a href="#" className={styles.logo}>Portfolio</a>
                    <div className={styles.links}>
                        {navItems.map((item) => (
                            <a key={item.label} href={item.href} className={styles.link}>
                                {item.label}
                            </a>
                        ))}
                    </div>
                </nav>
            </Container>
        </header>
    );
}
