import type { NextPage } from "next";
import styles from "./styles/index.module.css";

const ProductosResultados: NextPage = () => {
    return (
        <div className={styles.design}>
            <header className={styles.imageContainerWrapper}>
                <img
                    className={styles.imageContainerIcon}
                    loading="lazy"
                    alt=""
                    src="/rectangle-73@2x.png"
                />
            </header>
            <section className={styles.fecha242026MontoFinanciamWrapper}>
                <div className={styles.fecha242026MontoContainer}>
                    <p className={styles.fecha242026}>Fecha: 24-2026</p>
                    <p className={styles.montoFinanciamiento263480}>
                        Monto financiamiento: 2,634.800,00 euros
                    </p>
                    <p className={styles.financistaAgenciaItaliana}>
                        Financista; Agencia Italiana de Colaboración al Desarrollo (AICS)
                    </p>
                    <p className={styles.reaDeIncidencia}>
                        Área de incidencia: 3 UBPC (“13 de marzo”, “Juan Oramas” y “26 de
                        julio”) y una UEB (“Victoria de Girón”), además del PDL “Vista
                        Hermosa", y entidades locales de servicios técnicos.   Municipio
                        Guanabacoa. La Habana.
                    </p>
                    <p className={styles.objetivoGeneralContribuir}>
                        Objetivo General: Contribuir al desarrollo socioeconómico y al
                        abastecimiento alimentario municipal sostenible.
                    </p>
                    <p className={styles.objetivoEspecficoFortalece}>
                        Objetivo Específico: Fortalecer la cadena de valor del sector lácteo
                        en su contribución a la gestión diversificada del Sistema
                        Alimentario Local del Municipio de Guanabacoa
                    </p>
                    <p className={styles.resultadosEsperadoa}>Resultados esperadoa:</p>
                    <p className={styles.r1AumentadaLa}>
                        R1: Aumentada la producción de leche bubalina de calidad, con
                        enfoque agroecológico diversificado y aplicación de principios de
                        economía circular
                    </p>
                    <p className={styles.r2MejoradasLas}>
                        R2: Mejoradas las capacidades para la transformación y
                        comercialización de lácteos a nivel local.
                    </p>
                    <p className={styles.r3MejoradasLas}>
                        R3: Mejoradas las capacidades de gobernanza local de los sistemas
                        agroalimentarios y promovida la educación alimentaria y nutricional
                        en sectores vulnerables de la población.
                    </p>
                </div>
            </section>
            <section className={styles.shapeContainer}>
                <div className={styles.subShapeContainer}>
                    <img
                        className={styles.subShapeContainerChild}
                        alt=""
                        src="/rectangle-56@2x.png"
                    />
                    <img
                        className={styles.subShapeContainerItem}
                        loading="lazy"
                        alt=""
                        src="/polygon-5.svg"
                    />
                </div>
            </section>
            <section className={styles.newsContainerWrapper}>
                <div className={styles.newsContainer}>
                    <h1 className={styles.noticiasSobreLa}>NOTICIAS SOBRE LA MARCHA</h1>
                    <div className={styles.newsDescriptionContainer}>
                        <div className={styles.tallerDeInicioContainer}>
                            <p className={styles.tallerDeInicio}>
                                Taller de inicio del proyecto en el municipio Guanabacoa.
                            </p>
                            <p className={styles.blankLine}>&nbsp;</p>
                            <p className={styles.elPasado21}>
                                El pasado 21 de junio de 2024 se efectuó el Taller de Arrancada
                                del proyecto, en el Centro de Capacitación “La Cascada”, de la
                                Empresa Agropecuaria Bacuranao, Guanabacoa, con la asistencia de
                                46 personas. Estaban presentes los beneficiarios directos del
                                proyecto, autoridades de Gobierno municipal, actores directos e
                                indirectos de las acciones previstas, el representantes de ACTAF
                                nacional, provincial y municipal, el Equipo Gestor de PAAS, y
                                una amplia representación de la oficina de AICS en Cuba,
                                encabezada por su Director Antonio Festa.
                            </p>
                            <p className={styles.blankLine1}>&nbsp;</p>
                            <p className={styles.enElTaller}>
                                En el taller, el Director del Programa PAAS, Juan Perez Lamas,
                                compartió el camino recorrido para llegar a este momento y el
                                objetivo perseguido con el mismo. También se presentaron los
                                integrantes del Equipo Externo y el Equipo local de ejecución. A
                                continuación Roberto Caballero (Miembro del Equipo de Gestión)
                                presentó los contenidos generales y la lógica prevista de
                                iontervención. Se continuó con la explicación del procedimiento
                                para las adquisiciones por William Graupera, la explicaciómn del
                                Plan de Actividades y Sistema de Monitoreo, por parte de Elieser
                                Perera, concluyendo con la socialización del proceso que se
                                iniciaría de inmediato para el diagnóstico de la situación
                                actual y proyecciones previstas para cada finca. Todo ello
                                estuvo acompañado de una activa participación de los presentes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className={styles.footerShapes}>
                <img
                    className={styles.footerShapesChild}
                    alt=""
                    src="/rectangle-59@2x.png"
                />
                <img
                    className={styles.footerShapesItem}
                    loading="lazy"
                    alt=""
                    src="/polygon-3.svg"
                />
            </div>
        </div>
    );
};

export default ProductosResultados;