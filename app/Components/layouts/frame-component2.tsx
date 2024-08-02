import type {NextPage} from "next";
import styles from "../styles/frame-component2.module.css";
import Image from "next/image";

export type FrameComponent2Type = {
    className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({className = ""}) => {
    return (
        <section className={[styles.paasactafProgramParent, className].join(" ")}>

            <h1 className={styles.titulo}>Programa de Colaboración Internacional para el Apoyo a una
                Agricultura Sostenible en Cuba, PAAS-ACTAF.</h1>

            <div className={styles.contenido}>

                <div className={styles.textoDescripcion}>
                    Este Programa propone como estrategia, gestionar, acompañar y apoyar proyectos que promuevan
                    y contribuyan a la implementación de los Planes de Soberanía Alimentaria y Educación
                    Nutricional a escala municipal, mediante la consolidación y generalización de un modelo de
                    gestión de cadenas de valor, en fincas auto-sostenibles que a su vez sirvan de referencia al
                    resto del país, multiplicando resultados y buenas ya logradas por PAAS.

                </div>

                {/*cuadros de texto*/}
                <div className={styles.ItemContenedor}>

                    <div className={styles.cuadroItem}>
                        <div className={styles.cuadroTextoItem}>
                            <h4 className={styles.cuadroTitulo}>Producción primaria</h4>
                            <div className={styles.textoCuadro}>
                                Contemplando las diferentes producciones que se desarrollan en fincas, cooperativas y
                                otras
                                formas productivas.
                            </div>
                        </div>
                        <Image
                            className={styles.fotoIcon}
                            loading="lazy"
                            width={100}
                            height={100}
                            alt=""
                            src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/Foto1.png`}
                        />
                    </div>

                    <div className={styles.cuadroItem}>
                        <div className={styles.cuadroTextoItem}>
                            <h4 className={styles.cuadroTitulo}>Cosecha y beneficio</h4>
                            <div className={styles.textoCuadro}>
                                Desde la planeación de cosecha y de momentos de acopio de la producción, hasta su
                                beneficio.
                            </div>
                        </div>
                        <Image
                            className={styles.fotoIcon}
                            loading="lazy"
                            alt=""
                            width={100}
                            height={100}
                            src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/Foto2.png`}
                        />
                    </div>
                    <div className={styles.cuadroItem}>
                        <div className={styles.cuadroTextoItem}>
                            <h4 className={styles.cuadroTitulo}>Procesamiento</h4>
                            <div className={styles.textoCuadro}>
                                Contempla las diferentes alternativas para una mayor variedad de ofertas y conservación
                                a
                                medio y largo plazo.
                            </div>
                        </div>
                        <Image
                            className={styles.fotoIcon}
                            loading="lazy"
                            alt=""
                            width={100}
                            height={100}
                            src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/Foto3.png`}
                        />
                    </div>

                    <div className={styles.cuadroItem}>
                        <div className={styles.cuadroTextoItem}>
                            <h4 className={styles.cuadroTitulo}>Comercialización</h4>
                            <div className={styles.textoCuadro}>
                                Para lograr el acceso de toda la población de una elevada variedad de ofertas de un
                                producto
                                de calidad y estabilidad
                            </div>
                        </div>
                        <Image
                            className={styles.fotoIcon}
                            loading="lazy"
                            alt=""
                            width={100}
                            height={100}
                            src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/Foto4.png`}
                        />
                    </div>

                </div>

            </div>

            {/*/!*cuadros de fotos*!/*/}
            {/*<div className={styles.photoGallery}>*/}

            {/*    <div className={styles.photoGalleryContenedor}/>*/}
            {/*    <Image*/}
            {/*        className={styles.fotoIcon}*/}
            {/*        loading="lazy"*/}
            {/*        width={500}*/}
            {/*        height={300}*/}
            {/*        alt=""*/}
            {/*        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/Foto1.png`}*/}
            {/*    />*/}
            {/*    <Image*/}
            {/*        className={styles.fotoIcon}*/}
            {/*        loading="lazy"*/}
            {/*        alt=""*/}
            {/*        width={500}*/}
            {/*        height={300}*/}
            {/*        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/Foto2.png`}*/}
            {/*    />*/}
            {/*    <Image*/}
            {/*        className={styles.fotoIcon}*/}
            {/*        loading="lazy"*/}
            {/*        alt=""*/}
            {/*        width={500}*/}
            {/*        height={300}*/}
            {/*        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/Foto3.png`}*/}
            {/*    />*/}
            {/*    <Image*/}
            {/*        className={styles.fotoIcon}*/}
            {/*        loading="lazy"*/}
            {/*        alt=""*/}
            {/*        width={500}*/}
            {/*        height={300}*/}
            {/*        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/Foto4.png`}*/}
            {/*    />*/}
            {/*</div>*/}


        </section>
    );
};

export default FrameComponent2;