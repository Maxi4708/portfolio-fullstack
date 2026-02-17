import styles from './ProjectCard.module.css';
import Button from './Button';
import Badge from './Badge';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
    return (
        <motion.div
            className={styles.card}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {project.images && project.images.thumbnail && (
                <div className={styles.imageContainer}>
                    <img
                        src={project.images.thumbnail}
                        alt={project.title}
                        className={styles.image}
                    />
                </div>
            )}
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{project.title}</h3>

                    <span className={styles.detailLabel} style={{ marginBottom: '0.5rem', display: 'block' }}>Arquitectura</span>
                    <div className={styles.tags}>
                        {project.architecture && project.architecture.map(tag => (
                            <Badge key={tag} variant="primary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>

                <p className={styles.description}>{project.description || project.shortDescription}</p>

                {project.architectureFlow && (
                    <>
                        <span className={styles.detailLabel} style={{ marginBottom: '0.5rem', display: 'block' }}>Flujo</span>
                        <div className={styles.flowContainer}>
                            {project.architectureFlow.map((item, index) => (
                                <div key={item} className={styles.flowItemWrapper}>
                                    <span className={styles.flowItem}>{item}</span>
                                    {index < project.architectureFlow.length - 1 && (
                                        <span className={styles.flowArrow}>→</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                <div className={styles.detailsGrid}>
                    <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>Problema</span>
                        <p className={styles.detailText}>{project.problem || project.problemStatement}</p>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>Solución</span>
                        <p className={styles.detailText}>{project.solution || project.solutionOverview}</p>
                    </div>
                </div>

                <span className={styles.detailLabel} style={{ marginBottom: '0.5rem', display: 'block' }}>Tecnologías</span>
                <div className={styles.tags}>
                    {project.technologies && project.technologies.slice(0, 4).map(tech => (
                        <Badge key={tech} variant="default">{tech}</Badge>
                    ))}
                    {project.technologies && project.technologies.length > 4 && (
                        <Badge variant="outline">+{project.technologies.length - 4}</Badge>
                    )}
                </div>

                <div className={styles.footer}>
                    {(project.github || (project.links && project.links.github)) && (
                        <Button
                            href={project.github || project.links.github}
                            variant="primary"
                            className={`${styles.buttonSmall} ${styles.projectButton}`}
                        >
                            Ver código
                            <svg className={styles.buttonIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </Button>
                    )}
                    {(project.demo || (project.links && project.links.live)) && (
                        <Button
                            href={project.demo || project.links.live}
                            variant="primary"
                            className={styles.buttonSmall}
                        >
                            Live Demo
                        </Button>
                    )}
                    {project.links && project.links.docs && (
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
        </motion.div>
    );
}

