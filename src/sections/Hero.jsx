import Button from '../components/ui/Button'
import styles from './Hero.module.css'
import { StaggerContainer, StaggerItem } from '../components/common/FadeIn'

export default function Hero() {
    return (
        <div id="hero" className={styles.hero}>
            <StaggerContainer className={styles.content}>
                <StaggerItem>
                    <span className={styles.greeting}>Hola, soy</span>
                </StaggerItem>
                <StaggerItem>
                    <h1 className={styles.name}>Maximiliano Martinez</h1>
                </StaggerItem>
                <StaggerItem>
                    <h2 className={styles.role}>Full Stack Developer</h2>
                </StaggerItem>
                <StaggerItem>
                    <p className={styles.description}>
                        Construyo aplicaciones web escalables con enfoque en arquitectura,
                        rendimiento y experiencia de usuario.
                    </p>
                </StaggerItem>

                <StaggerItem>
                    <div className={styles.availability}>
                        <span className={styles.statusDot}></span>
                        <span>Disponible para nuevos proyectos</span>
                    </div>
                </StaggerItem>

                <StaggerItem>
                    <div className={styles.actions}>
                        <Button href="https://github.com/Maxi4708" variant="outline">GitHub</Button>
                        <Button href="https://www.linkedin.com/in/maximiliano-martinez4708/" variant="primary">LinkedIn</Button>
                    </div>
                </StaggerItem>
            </StaggerContainer>
        </div>
    )
}
