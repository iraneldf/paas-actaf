import type { NextPage } from "next";
import styles from "./styles/index.module.css";
import Image from "next/image";

const ProductosYResultadosDelPro: NextPage = () => {
    return (


        <main className={styles.main}>

            <section className={styles.program}>

                <div className={styles.results}>
                    <h1 className={styles.titulo}>
                        productos y resultados del Programa
                    </h1>
                </div>

                <div className={styles.productDescription}>

                    <div className={styles.productHeader}>
                        <div className={styles.productHeaderChild} />
                        <Image
                            width={100}
                            height={100}
                            className={styles.productImageIcon}
                            loading="lazy"
                            alt=""
                            src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/productos y programas/programa 1.png`}
                        />
                        <div className={styles.productDetails}>
                            <div className={styles.productInformation}>
                                <div className={styles.productLabels}>
                                    <div className={styles.nombre}>Nombre:</div>
                                    <div className={styles.descripcion}>Descripción:</div>
                                </div>
                                <div className={styles.productContent}>
                                    <div className={styles.productOne}>
                                        <div className={styles.manualPrcticoPara}>
                                            Manual práctico para productoras y productores
                                            agrícolas: desarrollo de inversiones en fincas y
                                            cooperativas agrícolas.
                                        </div>
                                        <div className={styles.estaTemticaEn}>
                                            Esta temática en nuestro entorno nacional, también ha
                                            estado marcada por criticas severas por el poco dominio
                                            y comprension del proceso inversionista, su ejecucion no
                                            eficiente y la baja calidad o inexistencia de estudios
                                            de factibilidad que sustenten la viabilidad de las
                                            mismas. De esta situacion no escapa ningun sector ni
                                            rama de la economia nacional. Sin embargo, en el sector
                                            agropecuario la situacion puede ser un poco mas
                                            complicada y acumular mayores retrasos, a pesar de
                                            esfuerzos por direccionar acciones de capacitacion en
                                            este sentido. La fortaleza de poder contar con un sector
                                            cooperativo - campesino instruido y culto, asegura que
                                            en un breve plazo ira tomando para si estas tecnicas y
                                            cambiara radicalmente su mentalidad, para bien propio y
                                            de la sociedad en su conjunto. La coyuntura y escenario
                                            actual de la economia cubana en su proceso de
                                            restructuracion exige a todos los actores economicos –
                                            sea cual fuere la forma de propiedad en que estan
                                            organizados - operar de manera eficiente, en primer
                                            lugar, y competitiva, en ultima instancia, si queremos
                                            tener una economia y sociedad sostenible.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={styles.productHeader}>
                        <div className={styles.productHeaderChild} />
                        <Image
                            width={100}
                            height={100}
                            className={styles.productImageIcon}
                            loading="lazy"
                            alt=""
                            src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/productos y programas/programa 2.png`}
                        />
                        <div className={styles.productDetails}>
                            <div className={styles.productInformation}>
                                <div className={styles.productLabels}>
                                    <div className={styles.nombre}>Nombre:</div>
                                    <div className={styles.descripcin}>Descripción:</div>
                                </div>
                                <div className={styles.productContent}>
                                    <div className={styles.productOne}>
                                        <div className={styles.manualPrcticoPara}>
                                            Sistema Participativo de Garantía para la Certificación
                                            Agroecológica.
                                        </div>
                                        <div className={styles.estaTemticaEn}>
                                            Los Sistemas Participativos de Garantía (SPG) son
                                            herramientas especialmente adaptadas a la Soberanía
                                            Alimentaria, ya que permiten visibilizar la realidad
                                            productiva de la actividad agraria, y generar compromisos
                                            para compartir los riesgos de la producción y el consumo.
                                            El Manual del Sistema Participativo de Garantía (SPG) para
                                            la certificación agroecológica en la Agricultura Urbana,
                                            Suburbana y Familiar en Cuba, ha sido elaborado en el
                                            marco del proyecto PAAS-2, y permite a agricultores,
                                            técnicos y decisores locales certificar sus producciones,
                                            logrando un justo reconocimiento a quienes producen de
                                            manera sostenible sobre bases agroecológicas.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            
        </main>
    );
};

export default ProductosYResultadosDelPro;