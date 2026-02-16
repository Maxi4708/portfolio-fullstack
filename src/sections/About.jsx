import styles from './About.module.css';
import Container from '../components/layout/Container';
import SectionHeader from '../components/ui/SectionHeader';

export default function About() {
    return (
        <div id="about" className={styles.about}>
            <SectionHeader title="Sobre Mí" />
            <div className={styles.content}>
                <p className={styles.text}>
                    Soy <span className={styles.highlight}>Analista de Sistemas</span> con experiencia desarrollando aplicaciones web utilizando tecnologías modernas como <span className={styles.highlight}>React</span>, <span className={styles.highlight}>JavaScript</span> y <span className={styles.highlight}>Python</span>. Me enfoco en construir soluciones reales aplicando buenas prácticas de <span className={styles.highlight}>arquitectura</span>, <span className={styles.highlight}>escalabilidad</span> y <span className={styles.highlight}>mantenibilidad</span>.
                </p>
                <p className={styles.text}>
                    Actualmente me encuentro enfocado en iniciar mi carrera profesional como desarrollador <span className={styles.highlight}>full stack</span>, creando proyectos que combinan <span className={styles.highlight}>diseño estructurado</span>, <span className={styles.highlight}>lógica de negocio</span> y una <span className={styles.highlight}>experiencia de usuario clara</span>.
                </p>
            </div>
        </div>
    );
}
