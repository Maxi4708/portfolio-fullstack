import styles from './CallToAction.module.css';
import Button from '../components/ui/Button';

export default function CallToAction() {
    return (
        <div className={styles.cta}>
            <h2 className={styles.title}>¿Listo para construir algo escalable?</h2>
            <p className={styles.description}>
                Ayudo a empresas a construir aplicaciones web robustas y enfocadas en la arquitectura.
                Convirtamos tus requerimientos complejos en un producto limpio y mantenible.
            </p>
            <div className={styles.buttonGroup}>
                
                <Button href="https://www.linkedin.com/in/maximiliano-martinez4708/" variant="outline" className={styles.buttonLarge}>
                    Conectar en LinkedIn
                </Button>
            </div>
        </div>
    );
}
