import styles from './Philosophy.module.css';
import SectionHeader from '../components/ui/SectionHeader';
import Grid from '../components/layout/Grid';

export default function Philosophy() {
    const principles = [
        {
            title: 'Basado en Componentes',
            description: 'Construyendo componentes UI modulares, reutilizables y testeables usando principios de Atomic Design.',
            icon: '🧩',
        },
        {
            title: 'Orientado a API',
            description: 'Diseñando APIs RESTful y GraphQL consistentes, documentadas y fáciles de consumir.',
            icon: '🔌',
        },
        {
            title: 'Arquitectura Escalable',
            description: 'Diseñando sistemas que crecen con el producto, aplicando separación de responsabilidades.',
            icon: '🏗️',
        },
        {
            title: 'Limpio y Mantenible',
            description: 'Escribiendo código autodocumentado con enfoque en legibilidad y mantenibilidad a largo plazo.',
            icon: '✨',
        },
    ];

    return (
        <div id="philosophy" className={styles.philosophy}>
            <SectionHeader title="Pensamiento Sistémico" />

            <Grid cols={2} className={styles.grid}>
                {principles.map((item) => (
                    <div key={item.title} className={styles.card}>
                        <div className={styles.icon}>{item.icon}</div>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.description}>{item.description}</p>
                    </div>
                ))}
            </Grid>
        </div>
    );
}
