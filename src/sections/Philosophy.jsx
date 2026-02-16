import styles from './Philosophy.module.css';
import SectionHeader from '../components/ui/SectionHeader';
import Grid from '../components/layout/Grid';

export default function Philosophy() {
    const principles = [
        {
            title: 'Arquitectura basada en componentes',
            description: 'Componentes UI modulares, reutilizables y desacoplados para interfaces consistentes.',
            icon: '🧩',
        },
        {
            title: 'Desarrollo orientado a APIs',
            description: 'Diseño de contratos claros y robustos para comunicación eficiente entre cliente y servidor.',
            icon: '🔌',
        },
        {
            title: 'Estructura escalable',
            description: 'Organización de código pensada para crecer sin deuda técnica ni complejidad accidental.',
            icon: '🏗️',
        },
        {
            title: 'Código limpio y mantenible',
            description: 'Prácticas de Clean Code para asegurar que el software sea fácil de leer y extender.',
            icon: '✨',
        },
    ];

    return (
        <div id="philosophy" className={styles.philosophy}>
            <SectionHeader
                title="Cómo construyo software"
                subtitle="Mis pilares técnicos para crear soluciones de alto valor."
            />

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
