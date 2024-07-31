import type {NextPage} from "next";
import styles from "./styles/index.module.css";

const ProyectosEnCurso: NextPage = () => {
    return (
        <div className={styles.proyectosEnCurso}>
            <main className={styles.proyectosEnCursoParent}>
                <section className={styles.titulo}>
                    Proyectos en curso
                </section>
                <section className={styles.projectsContainerWrapper}>
                    <div className={styles.projectsContainer}>
                        <img
                            className={styles.projectDividerIcon}
                            loading="lazy"
                            alt=""
                            src="/rectangle-4@2x.png"
                        />
                        <div className={styles.projectList}>
                            <div className={styles.projectItemOne}>
                                <div className={styles.projectDetailsOne}>
                                    <div className={styles.projectContentOne}>
                                        <div className={styles.projectHeaderOne}>
                                            <div className={styles.nombre}>Nombre:</div>
                                            <div className={styles.ao}>Año:</div>
                                            <div className={styles.descripcin}>Descripción:</div>
                                        </div>
                                        <div className={styles.projectDescriptionContainer}>
                                            <div className={styles.projectTitleContainerOne}>
                                                <div className={styles.diversificacinProductivaY}>
                                                    Diversificación productiva y fortalecimiento del
                                                    Sistema Alimentario Local del Municipio de Guanabacoa.
                                                </div>
                                                <div className={styles.projectTitleOne}>2024-2026</div>
                                            </div>
                                            <div className={styles.projectDescriptionOne}>
                                                <div className={styles.projectDescriptionContentOn}>
                                                    <div className={styles.projectImageOne}/>
                                                    <div className={styles.elProyectoBusca}>
                                                        El proyecto busca contribuir a la sostenibilidad del
                                                        sistema alimentario local del municipio Guanabacoa a
                                                        través del fortalecimiento de la cadena de valor
                                                        láctea en el territorio, fundamentalmente bubalina,
                                                        con un enfoque diversificado, a partir de prácticas
                                                        agroecológicas, el manejo eficiente de los recursos
                                                        naturales, la introducción de los principios de la
                                                        economía circular y el empleo de fuentes renovables
                                                        de energía. La propuesta busca contribuir al aumento
                                                        de la insuficiente oferta de alimentos, sobre todo
                                                        proteínas de origen animal que es uno de los
                                                        principales problemas de nutrición en la población
                                                        de la municipalidad. Además, impacta en la solución
                                                        de otros problemas presentes especialmente en las
                                                        comunidades rurales, entre los que se encuentran las
                                                        oportunidades de empleo, las condiciones de trabajo
                                                        y de vida fundamentalmente de mujeres y jóvenes.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.spacerOne}>
                                    <div className={styles.spacerOneChild}/>
                                    <img
                                        className={styles.spacerOneItem}
                                        loading="lazy"
                                        alt=""
                                        src="/rectangle-66@2x.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.projectItemTwo}>
                    <div className={styles.projectDetailsTwo}>
                        <img
                            className={styles.projectDetailsTwoChild}
                            loading="lazy"
                            alt=""
                            src="/rectangle-6@2x.png"
                        />
                        <div className={styles.projectContentTwo}>
                            <div className={styles.projectInformationTwo}>
                                <div className={styles.projectNameYearTwo}>
                                    <div className={styles.projectDetailsContainerTwo}>
                                        <div className={styles.projectHeaderTwo}>
                                            <div className={styles.projectHeaderDetailsTwo}>
                                                <div className={styles.nombre1}>Nombre:</div>
                                                <div className={styles.ao1}>Año:</div>
                                                <div className={styles.descripcin1}>Descripción:</div>
                                            </div>
                                        </div>
                                        <div className={styles.projectDescriptionContainer1}>
                                            <div className={styles.projectTitleContainerTwo}>
                                                <blockquote className={styles.mujeresProtagonistasEn}>
                                                    “MUJERES PROTAGONISTAS EN EL MOVIMIENTO DE LA
                                                    AGRICULTURA URBANA ECOLOGICA EN SANTIAGO DE CUBA”
                                                </blockquote>
                                                <div className={styles.projectTitleTwo}>2023-2024</div>
                                            </div>
                                            <div className={styles.projectDescriptionTwo}>
                                                <div className={styles.projectImageTwo}/>
                                                <div className={styles.esteProyectoContribuye}>
                                                    Este proyecto contribuye a la sostenibilidad
                                                    alimentaria local, a través del impulso al PNI-AUSF,
                                                    específicamente del subprograma avícola, para lograr
                                                    la elevación de los niveles productivos, la
                                                    eficiencia, la mejora de la gestión económica
                                                    financiera y por consiguiente el nivel de satisfacción
                                                    social de la población. La forma de potenciar el
                                                    empoderamiento económico de las mujeres será apoyando
                                                    el desarrollo productivo de la finca a través de la
                                                    instalación y explotación de un área de incubación de
                                                    pollitos y la crianza de traspatio, a partir de la
                                                    creación de capacidades técnicas en cuanto a la
                                                    producción avícola y la comercialización local.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.spacerTwo}>
                                    <div className={styles.spacerTwoChild}/>
                                    <img
                                        className={styles.spacerTwoItem}
                                        loading="lazy"
                                        alt=""
                                        src="/rectangle-68@2x.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProyectosEnCurso;