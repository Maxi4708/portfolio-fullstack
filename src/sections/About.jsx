import styles from './About.module.css';
import Container from '../components/layout/Container';
import SectionHeader from '../components/ui/SectionHeader';

export default function About() {
    return (
        <div id="about" className={styles.about}>
            <SectionHeader title="Sobre Mí" />
            <div className={styles.content}>
                <p className={styles.text}>
                    Soy <span className={styles.highlight}>Analista de Sistemas en formación</span> con experiencia desarrollando aplicaciones web utilizando tecnologías modernas como React, JavaScript y Python. Me enfoco en construir soluciones reales con buenas prácticas de arquitectura, escalabilidad y mantenibilidad.
                </p>
                <p className={styles.text}>
                    Actualmente busco mi primera oportunidad profesional como desarrollador, luego de haber realizado una pasantía en Vippinn, donde fortalecí mis conocimientos en desarrollo frontend y trabajo en equipo.
                </p>
            </div>
        </div>
    );
}
