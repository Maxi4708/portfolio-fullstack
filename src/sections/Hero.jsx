import Button from '../components/ui/Button'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <div id="hero" className={styles.hero}>
            <span className={styles.greeting}>Hola, soy</span>
            <h1 className={styles.name}>Maximiliano Martinez</h1>
            <h2 className={styles.role}>Analista de Sistemas & Full Stack Developer</h2>
            <p className={styles.description}>
                Desarrollo aplicaciones web completas enfocadas en arquitectura limpia, experiencia de usuario y soluciones escalables, combinando una base sólida en análisis de sistemas con desarrollo full stack moderno.
            </p>
            <div className={styles.actions}>
                <Button href="https://github.com" variant="primary">Ver mi GitHub</Button>
                <Button href="https://linkedin.com" variant="outline">LinkedIn</Button>
                <Button href="/cv.pdf" variant="ghost">Descargar CV</Button>
            </div>
        </div>
    )
}
