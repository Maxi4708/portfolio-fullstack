import styles from './Layout.module.css';
import Container from '../layout/Container';

export default function Header() {
    const navItems = [
        { label: 'Sobre mí', href: '#about' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Contacto', href: '#cta' },
    ];

    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <div className={styles.logo}>Maximiliano Martinez</div>
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
