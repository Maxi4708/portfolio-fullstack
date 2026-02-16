import Button from '../components/ui/Button'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <div id="hero" className={styles.hero}>
            <span className={styles.greeting}>Hola, soy</span>
            <h1 className={styles.name}>Maximiliano Martinez</h1>
            <h2 className={styles.role}>Full Stack Developer</h2>
            <p className={styles.description}>
                Construyo aplicaciones web escalables y de alto rendimiento.
                <br />
                Enfocado en arquitectura limpia y experiencia de usuario.
            </p>
            <p className={styles.availability}>
                <span className={styles.dot}></span>
                Disponible para oportunidades como Full Stack Developer, aportando una base sólida en análisis de sistemas y desarrollo de aplicaciones web reales.
            </p>
            <div className={styles.actions}>
                <Button href="#projects" variant="primary">Ver Proyectos</Button>
                <Button href="https://github.com/Maxi4708" variant="outline">GitHub</Button>
                <Button href="https://www.linkedin.com/in/maximiliano-martinez4708/" variant="ghost">LinkedIn</Button>
            </div>
        </div>
    )
}
