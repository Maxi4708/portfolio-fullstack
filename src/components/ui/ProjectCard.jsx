import styles from './ProjectCard.module.css';
import Button from './Button';
import Badge from './Badge';

export default function ProjectCard({ project }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img
                    src={project.images.thumbnail}
                    alt={project.title}
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{project.title}</h3>

                    <div className={styles.tags}>
                        {project.architecture.map(tag => (
                            <Badge key={tag} variant="primary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>

                <p className={styles.description}>{project.shortDescription}</p>

                <div className={styles.detailsGrid}>
                    <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>Challenge</span>
                        <p className={styles.detailText}>{project.problemStatement}</p>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>Solution</span>
                        <p className={styles.detailText}>{project.solutionOverview}</p>
                    </div>
                </div>

                <div className={styles.tags}>
                    {project.technologies.slice(0, 4).map(tech => (
                        <Badge key={tech} variant="default">{tech}</Badge>
                    ))}
                    {project.technologies.length > 4 && (
                        <Badge variant="outline">+{project.technologies.length - 4}</Badge>
                    )}
                </div>

                <div className={styles.footer}>
                    {project.links.github && (
                        <Button
                            href={project.links.github}
                            variant="outline"
                            className={styles.buttonSmall}
                        >
                            GitHub
                        </Button>
                    )}
                    {project.links.live && (
                        <Button
                            href={project.links.live}
                            variant="primary"
                            className={styles.buttonSmall}
                        >
                            Live Demo
                        </Button>
                    )}
                    {project.links.docs && (
                        <Button
                            href={project.links.docs}
                            variant="ghost"
                            className={styles.buttonSmall}
                        >
                            Docs
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
