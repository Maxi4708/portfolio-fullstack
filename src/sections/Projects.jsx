import styles from './Projects.module.css';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';
import SectionHeader from '../components/ui/SectionHeader';
import { StaggerContainer, StaggerItem } from '../components/common/FadeIn';

export default function Projects() {
    return (
        <div id="projects" className={styles.projects}>
            <SectionHeader
                title="Proyectos Destacados"
                subtitle="Una selección de proyectos que demuestran mi capacidad para resolver problemas complejos con arquitectura limpia."
            />

            <StaggerContainer className={styles.grid}>
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <StaggerItem key={project.id}>
                            <ProjectCard project={project} />
                        </StaggerItem>
                    ))
                ) : (
                    <StaggerItem>
                        <p className={styles.subtitle}>No se encontraron proyectos.</p>
                    </StaggerItem>
                )}
            </StaggerContainer>
        </div>
    );
}
