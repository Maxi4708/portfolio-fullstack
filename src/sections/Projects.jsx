import styles from './Projects.module.css';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';
import SectionHeader from '../components/ui/SectionHeader';
import Grid from '../components/layout/Grid';

export default function Projects() {
    return (
        <div id="projects" className={styles.projects}>
            <SectionHeader
                title="Proyectos Destacados"
                subtitle="Una selección de proyectos que demuestran mi capacidad para resolver problemas complejos con arquitectura limpia."
            />

            <Grid cols={3} className={styles.grid}>
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                ) : (
                    <p className={styles.subtitle}>No se encontraron proyectos.</p>
                )}
            </Grid>
        </div>
    );
}
