import type {NextPage} from "next";
import styles from "./styles/index.module.css";
import ProyectoItem from "@/app/Components/proyectoItem";

const ProyectosEnCurso: NextPage = () => {
    return (
        <main className={styles.proyectosEnCurso}>

            <section className={styles.titulo}>
                Nuestros Proyectos Terminados
            </section>

            <div className={styles.proyectosContenedor}>
                <ProyectoItem cardImage="/images/proyectos%20terminados/proyecto%20terminado%20%201.png"/>
                <ProyectoItem cardImage="/images/proyectos%20terminados/proyecto%20terminado%202.png"/>
            </div>
        </main>

    );
};

export default ProyectosEnCurso;