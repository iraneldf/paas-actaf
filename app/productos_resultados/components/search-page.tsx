import type { NextPage } from "next";
import styles from "../styles/search-page.module.css";
import Image from "next/image";

const SearchPage: NextPage = () => {
    return (
        <div className={styles.searchPage}>
            <Image
                width={100}
                height={100}
                className={styles.searchPageChild}
                alt=""
                src="/rectangle-31@2x.png"
            />
            <section className={styles.frameParent}>
                <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.contactInfo}>
                        <Image
                            width={100}
                            height={100}
                            className={styles.contactImageIcon}
                            loading="lazy"
                            alt=""
                            src="/ellipse-6@2x.png"
                        />
                    </div>
                    <div className={styles.juanPrezLamasWrapper}>
                        <div className={styles.juanPrezLamas}>Juan Pérez Lamas</div>
                    </div>
                    <div className={styles.doctorEnCienciasAgrariasDiWrapper}>
                        <div className={styles.doctorEnCienciasContainer}>
                            <p className={styles.doctorEnCiencias}>
                                Doctor en Ciencias Agrarias
                            </p>
                            <p className={styles.directorDelPrograma}>``
                                Director del Programa
                            </p>
                        </div>
                    </div>
                    <div className={styles.loremIpsumDolorSitAmetEuWrapper}>
                        <div className={styles.loremIpsumDolor}>
                            Lorem ipsum dolor sit amet. Eum voluptatem illo aut illum alias
                            sit doloremque omnis
                        </div>
                    </div>
                    <div className={styles.imageGridWrapper}>
                        <div className={styles.imageGrid}>
                            <Image
                                width={100}
                                height={100}
                                className={styles.gridImageLeft}
                                loading="lazy"
                                alt=""
                                src="/rectangle-33@2x.png"
                            />
                            <Image
                                width={100}
                                height={100}
                                className={styles.gridImageRight}
                                loading="lazy"
                                alt=""
                                src="/rectangle-34@2x.png"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.frameWrapper}>
                    <div className={styles.rectangleGroup}>
                        <div className={styles.frameItem} />
                        <div className={styles.specialistNamesParent}>
                            <div className={styles.specialistNames}>
                                <Image
                                    width={100}
                                    height={100}
                                    className={styles.specialistImagesIcon}
                                    loading="lazy"
                                    alt=""
                                    src="/ellipse-7@2x.png"
                                />
                            </div>
                            <div className={styles.specialistRoles}>
                                <div className={styles.elieserPereraConcepcin}>
                                    Elieser Perera Concepción
                                </div>
                                <div className={styles.especialistaOficialDeContainer}>
                                    <p className={styles.especialista}>Especialista</p>
                                    <p className={styles.oficialDeMonitoreo}>
                                        Oficial de Monitoreo y Seguimiento
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.loremIpsumDolorSitAmetEuContainer}>
                            <div
                                className={styles.loremIpsumDolor1}
                            >{`Lorem ipsum dolor sit amet.  Eum voluptatem illo aut illum alias sit doloremque omnis. `}</div>
                        </div>
                        <div className={styles.imagesRowWrapper}>
                            <div className={styles.imagesRow}>
                                <Image
                                    width={100}
                                    height={100}
                                    className={styles.leftImageIcon}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-36@2x.png"
                                />
                                <Image
                                    width={100}
                                    height={100}
                                    className={styles.rightImageIcon}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-37@2x.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.frameContainer}>
                    <div className={styles.rectangleContainer}>
                        <div className={styles.frameInner} />
                        <div className={styles.frameGroup}>
                            <div className={styles.ellipseWrapper}>
                                <Image
                                    width={100}
                                    height={100}
                                    className={styles.ellipseIcon}
                                    loading="lazy"
                                    alt=""
                                    src="/ellipse-8@2x.png"
                                />
                            </div>
                            <div className={styles.williamGrauperaBahsamondeParent}>
                                <div className={styles.williamGrauperaBahsamonde}>
                                    William Graupera Bahsamonde
                                </div>
                                <div className={styles.especialistaOficialDeContainer1}>
                                    <p className={styles.especialista1}>Especialista</p>
                                    <p className={styles.oficialDeLogstica}>
                                        Oficial de Logística
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.loremIpsumDolorSitAmetEuFrame}>
                            <div className={styles.loremIpsumDolor2}>
                                Lorem ipsum dolor sit amet. Eum voluptatem illo aut illum alias
                                sit doloremque omnis.
                            </div>
                        </div>
                        <div className={styles.frameDiv}>
                            <div className={styles.rectangleParent1}>
                                <Image
                                    width={100}
                                    height={100}
                                    className={styles.rectangleIcon}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-39@2x.png"
                                />
                                <Image
                                    width={100}
                                    height={100}
                                    className={styles.frameChild1}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-40@2x.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rectangleParent2}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.frameParent1}>
                        <div className={styles.ellipseContainer}>
                            <Image
                                width={100}
                                height={100}
                                className={styles.frameChild2}
                                loading="lazy"
                                alt=""
                                src="/ellipse-9@2x.png"
                            />
                        </div>
                        <div className={styles.maylnRamrezCabreraParent}>
                            <div className={styles.maylnRamrezCabrera}>
                                Maylín Ramírez Cabrera
                            </div>
                            <div className={styles.mscAlimentosOficialContainer}>
                                <p className={styles.mscAlimentos}>Msc Alimentos</p>
                                <p className={styles.oficialDeEconoma}>Oficial de Economía</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.loremIpsumDolorSitAmetEuWrapper1}>
                        <div className={styles.loremIpsumDolor3}>
                            Lorem ipsum dolor sit amet. Eum voluptatem illo aut illum alias
                            sit doloremque omnis.
                        </div>
                    </div>
                    <div className={styles.frameWrapper1}>
                        <div className={styles.leftSummaryImageParent}>
                            <Image
                                width={100}
                                height={100}
                                className={styles.leftSummaryImage}
                                loading="lazy"
                                alt=""
                                src="/rectangle-42@2x.png"
                            />
                            <Image
                                width={100}
                                height={100}
                                className={styles.rightSummaryImage}
                                loading="lazy"
                                alt=""
                                src="/rectangle-43@2x.png"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.secondProfile}>
                <div className={styles.secondProfileDetailsParent}>
                    <div className={styles.secondProfileDetails}>
                        <div className={styles.secondProfileDetailsChild} />
                        <div className={styles.secondContactInfo}>
                            <Image
                                width={100}
                                height={100}
                                className={styles.secondContactImages}
                                loading="lazy"
                                alt=""
                                src="/ellipse-10@2x.png"
                            />
                        </div>
                        <div className={styles.secondSpecialistDetails}>
                            <div className={styles.robertoCaballeroGrande}>
                                Roberto Caballero Grande
                            </div>
                            <div className={styles.drEnCienciasContainer}>
                                <p className={styles.drEnCiencias}>Dr. en Ciencias Agrarias</p>
                                <p className={styles.especialista2}>Especialista</p>
                            </div>
                        </div>
                        <div className={styles.loremIpsumDolorSitAmetEuWrapper2}>
                            <div className={styles.loremIpsumDolor4}>
                                Lorem ipsum dolor sit amet. Eum voluptatem illo aut illum alias
                                sit doloremque omnis.
                            </div>
                        </div>
                        <div className={styles.secondImageRowWrapper}>
                            <div className={styles.secondImageRow}>
                                <Image
                                    width={100}
                                    height={100}
                                    className={styles.secondLeftImage}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-45@2x.png"
                                />
                                <Image
                                    width={100}
                                    height={100}
                                    className={styles.secondRightImage}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-46@2x.png"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.thirdProfile}>
                        <div className={styles.thirdProfileContainer}>
                            <div className={styles.thirdProfileContainerChild} />
                            <div className={styles.thirdProfileImage}>
                                <Image
                                    width={100}
                                    height={100}
                                    className={styles.thirdProfileImageChild}
                                    loading="lazy"
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                />
                            </div>
                            <div className={styles.thirdProfileName}>
                                <div className={styles.maraDelCarmen}>
                                    María del Carmen Pérez
                                </div>
                            </div>
                            <div className={styles.thirdProfileTitle}>
                                <div className={styles.draCienciasAgrariasContainer}>
                                    <p className={styles.draCienciasAgrarias}>
                                        Dra. Ciencias Agrarias
                                    </p>
                                    <p className={styles.especialistaPrincipal}>
                                        Especialista Principal
                                    </p>
                                </div>
                            </div>
                            <div className={styles.thirdProfileSummary}>
                                <div
                                    className={styles.loremIpsumDolor5}
                                >{`Lorem ipsum dolor sit amet.  Eum voluptatem illo aut illum alias sit doloremque omnis. `}</div>
                            </div>
                            <div className={styles.thirdProfileImages}>
                                <div className={styles.thirdProfileImagePairParent}>
                                    <Image
                                        width={100}
                                        height={100}
                                        className={styles.thirdProfileImagePair}
                                        loading="lazy"
                                        alt=""
                                        src="/rectangle-48@2x.png"
                                    />
                                    <Image
                                        width={100}
                                        height={100}
                                        className={styles.thirdProfileImagePair1}
                                        loading="lazy"
                                        alt=""
                                        src="/rectangle-49@2x.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.secondProfileDetails1}>
                        <div className={styles.secondProfileDetailsItem} />
                        <div className={styles.secondProfileDetailsInner}>
                            <Image
                                width={100}
                                height={100}
                                className={styles.frameChild3}
                                loading="lazy"
                                alt=""
                                src="/ellipse-12@2x.png"
                            />
                        </div>
                        <div className={styles.camilaCaballeroSalgadoParent}>
                            <div className={styles.camilaCaballeroSalgado}>
                                Camila Caballero Salgado
                            </div>
                            <div className={styles.ingEnCienciasContainer}>
                                <p className={styles.ingEnCiencias}>
                                    Ing. En Ciencias Informáticas
                                </p>
                                <p className={styles.oficialDeComunicacin}>
                                    Oficial de Comunicación
                                </p>
                            </div>
                        </div>
                        <div className={styles.loremIpsumDolorSitAmetEuWrapper3}>
                            <div className={styles.loremIpsumDolor6}>
                                Lorem ipsum dolor sit amet. Eum voluptatem illo aut illum alias
                                sit doloremque omnis.
                            </div>
                        </div>
                        <div className={styles.secondProfileDetailsInner1}>
                            <div className={styles.rectangleParent3}>
                                <Image
                                    width={100}
                                    height={100}
                                    className={styles.frameChild4}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-51@2x.png"
                                />
                                <Image
                                    width={100}
                                    height={100}
                                    className={styles.frameChild5}
                                    loading="lazy"
                                    alt=""
                                    src="/rectangle-52@2x.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SearchPage;