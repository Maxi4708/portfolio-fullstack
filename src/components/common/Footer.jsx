import styles from './Layout.module.css';
import Container from '../layout/Container';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerContent}>
                    <div className={styles.footerInfo}>
                        <h3 className={styles.footerName}>Maximiliano Martinez</h3>
                        <p className={styles.footerRole}>Analista de Sistemas & Full Stack Developer</p>
                    </div>

                    <div className={styles.footerLinks}>
                        <a href="https://github.com/Maxi4708" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>GitHub</a>
                        <a href="https://www.linkedin.com/in/maximiliano-martinez4708/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>LinkedIn</a>
                    </div>
                </div>

                <div className={styles.availability}>
                    <p>Actualmente abierto a oportunidades como Full Stack Developer, aportando una base sólida en análisis de sistemas y desarrollo de aplicaciones web.</p>
                </div>

                <div className={styles.copyright}>
                    <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
                </div>
            </Container>
        </footer>
    );
}
