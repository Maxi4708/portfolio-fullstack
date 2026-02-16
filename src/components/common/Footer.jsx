import styles from './Layout.module.css';
import Container from '../layout/Container';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <p>© {new Date().getFullYear()} Diseñado y Construido con arquitectura limpia.</p>
            </Container>
        </footer>
    );
}
