import styles from './Skills.module.css';
import { skills } from '../data/skills';
import SectionHeader from '../components/ui/SectionHeader';
import Grid from '../components/layout/Grid';

export default function Skills() {
    return (
        <div id="skills" className={styles.skills}>
            <SectionHeader title="Stack Tecnológico" />

            <Grid cols={4} className={styles.grid}>
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className={styles.category}>
                        <h3 className={styles.categoryTitle}>{category}</h3>
                        <ul className={styles.list}>
                            {items.map((skill) => (
                                <li key={skill.name} className={styles.item}>
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </Grid>
        </div>
    );
}
