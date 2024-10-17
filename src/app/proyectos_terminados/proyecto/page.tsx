import type { NextPage } from "next";
import styles from "./styles/index.module.css";

const Root: NextPage = () => {
    return (
        <div className={styles.root}>
            <section className={styles.projectDetails}>
                <div className={styles.elProyectoPaasContainer}>
                    <span>
                        <p className={styles.elProyectoPaas}>
                            El proyecto PAAS se ha desarrollado en una relación estrecha, de
                            diálogo e interacción las políticas agropecuarias nacionales que
                            se han venido implementado en el país desde inicios de la década
                            pasada. En buena medida, su desarrollo es el producto o resultado
                            de esas políticas, pero a la vez el proyecto ha contribuido a la
                            implementación de esas políticas. La estrategia de participación y
                            articulación de actores que implementó PAAS, es posiblemente uno
                            de los principales aspectos que ha contribuido al éxito en el
                            desarrollo de las CV. El proyecto evidenció la importancia de
                            disponer de mecanismos de innovación tecnológica y del
                            acompañamiento técnico-científico por parte de las entidades
                            correspondientes, así como la participación de los actores
                            municipales-locales en todos los eslabones de la cadena.
                        </p>
                        <p className={styles.elProyectoHa}>
                            El proyecto ha permitido comprobar que la producción y gestión de
                            determinados productos ( pollo de ceba, cultivo protegido en casas
                            rústicas), resulta eficaz cuando se realiza a nivel  de finca o
                            cooperativa, más que desde grandes empresas estatales en las
                            condiciones económicas actuales del país. Para que eso sea
                            posible, sin embargo, se requiere contar con el   apoyo/respaldo
                            de las instituciones reguladoras del país, encargadas de otorgar
                            los avales correspondientes, así como que el productor cuente con
                            el compromiso e iniciativa necesarias para proyectar y potenciar
                            el desarrollo de la cadena.
                        </p>
                        <p className={styles.sePudoComprobar}>
                            Se pudo comprobar que siempre, las CV contribuyeron a la
                            generación de empleo a nivel local,  es-pecialmente de mujeres y
                            jóvenes; mejorando los niveles de ingreso y la actividad
                            económica local, y han aumentado la producción de alimentos para
                            el consumo local.
                        </p>
                        <p className={styles.laEstrategiaPropuesta}>
                            La estrategia propuesta y demostrada, garantiza la sostenibilidad
                            de las CV al potenciar y apoyarse fundamentalmente en las
                            capacidades locales existentes, razón por la cual la participación
                            de los  gobiernos municipales es crucial, así como de otros
                            actores locales, municipales y provinciales.
                        </p>
                    </span>
                </div>
            </section>
            <video className={styles.shapes} autoPlay muted loop controls>
                <source src="" />
            </video>
            <section className={styles.resultsContentWrapper}>
                <div className={styles.resultsContent}>
                    <div className={styles.resultTitle}>
                        <h1 className={styles.principalesResultados}>
                            Principales resultados
                        </h1>
                    </div>
                    <div className={styles.resultImpact}>
                        <div className={styles.incidenciaRelevanteEnContainer}>
                            <span>
                                <ul className={styles.incidenciaRelevanteEnPolti}>
                                    <li className={styles.incidenciaRelevanteEn}>
                                        Incidencia relevante en políticas y estrategias nacionales
                                        como: Decreto Ley de Agroecología, Programa y subprogramas
                                        de Agricultura Urbana, Suburbana y Familiar, Programas de
                                        Autoabastecimiento Municipales, Política cubana de extensión
                                        agraria, Estrategia Hortícola Nacional, Decreto 18/2020
                                        sobre inocuidad alimentaria, entre otros.
                                    </li>
                                </ul>
                                <p className={styles.blankLine}>&nbsp;</p>
                                <ul className={styles.extensinDelCultivoProtegid}>
                                    <li className={styles.extensinDelCultivo}>
                                        Extensión del cultivo protegido y la producción de carne de
                                        aves a escala de pequeños productores.
                                    </li>
                                </ul>
                                <p className={styles.blankLine1}>&nbsp;</p>
                                <ul className={styles.incrementoDelCultivoYLaPr}>
                                    <li className={styles.incrementoDelCultivo}>
                                        Incremento del cultivo y la producción de harina de yuca de
                                        manera sostenible.
                                    </li>
                                </ul>
                                <p className={styles.blankLine2}>&nbsp;</p>
                                <ul className={styles.fortalecimientoDeLaProducci}>
                                    <li className={styles.fortalecimientoDeLa}>
                                        Fortalecimiento de la producción de leche de cabra y sus
                                        derivados, con la introducción de razas más productivas y la
                                        formación de maestros queseros.
                                    </li>
                                </ul>
                                <p className={styles.blankLine3}>&nbsp;</p>
                                <ul className={styles.escaladoYDiversificacinDel}>
                                    <li>
                                        Escalado y diversificación del procesamiento postcosecha de
                                        frutas, viandas y hortalizas.
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                    <footer className={styles.clickAquPara}>
                        Click aquí para descargar el Informe Final del proyecto.
                    </footer>
                </div>
            </section>
        </div>
    );
};

export default Root;