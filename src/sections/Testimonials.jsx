import styles from './Testimonials.module.css';
import SectionHeader from '../components/ui/SectionHeader';
import Grid from '../components/layout/Grid';

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            quote: "La arquitectura que diseñó para nuestra plataforma nos permitió escalar de 1k a 100k usuarios sin problemas. Un trabajo verdaderamente profesional.",
            name: "Sarah Jenkins",
            role: "CTO en TechStart",
            avatar: "https://placehold.co/100x100/222/FFF?text=SJ"
        },
        {
            id: 2,
            quote: "La reutilización de componentes cambió el juego. Redujimos el tiempo de desarrollo en un 40% en nuevas funcionalidades gracias al sistema de diseño que implementó.",
            name: "Mark Rivera",
            role: "Product Manager en NextLevel",
            avatar: "https://placehold.co/100x100/222/FFF?text=MR"
        }
    ];

    return (
        <div id="testimonials" className={styles.testimonials}>
            <SectionHeader title="Con la Confianza de Equipos de Ingeniería" />

            <Grid cols={2} className={styles.grid}>
                {testimonials.map((t) => (
                    <div key={t.id} className={styles.card}>
                        <p className={styles.quote}>"{t.quote}"</p>
                        <div className={styles.author}>
                            <img src={t.avatar} alt={t.name} className={styles.avatar} />
                            <div className={styles.info}>
                                <span className={styles.name}>{t.name}</span>
                                <span className={styles.role}>{t.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Grid>
        </div>
    );
}
