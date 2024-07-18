import type { NextPage } from "next";
import styles from "./styles/index.module.css";
import ProyectoItem from "@/app/proyectos_en_curso/components/proyectoItem";

const ProyectosEnCurso: NextPage = () => {
    return (
        <main className={styles.proyectosEnCurso}>
            <div
                className={styles.nuestrosProyectosEnCursoParent}
            >
                <section className={styles.nuestrosProyectosEn}>
                    Nuestros Proyectos en curso
                </section>

                <ProyectoItem cardImage="/images/proyectos_en_curso/proyecto1.png"/>
                <ProyectoItem cardImage="/images/proyectos_en_curso/proyecto2.png"/>
                <ProyectoItem cardImage="/images/proyectos_en_curso/proyecto3.png"/>
            </div>

        </main>

    );
};

export default ProyectosEnCurso;