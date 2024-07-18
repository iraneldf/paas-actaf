import type {NextPage} from "next";
import styles from "../styles/frame-component2.module.css";
import Image from "next/image";

export type FrameComponent2Type = {
    className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({className = ""}) => {
    return (
        <section className={[styles.paasactafProgramParent, className].join(" ")}>
            <header className={styles.paasactafProgram}>
                <h1 className={styles.programaPaasActaf}>Programa PAAS-ACTAF</h1>
            </header>
            <div className={styles.nestedContentWrapper}>
                <div className={styles.nestedContent}>
                    {/*Encabezado*/}
                    <div className={styles.miniDescriptionWrapper}>
                        <div className={styles.loremIpsumDolor}>
                            Texto encabezado Lorem ipsum dolor sit amet. Eum reprehenderit minima ut ipsam
                            galisum a nihil tenetur ea quaerat quibusdam sit quisquam laborum
                            qui aliquid dolorem aut dolores quam. Non quia sunt non quia autem
                            et deleniti nobis! Sed error doloremque et itaque libero quo
                            quidem eius id praesentium doloribus qui soluta tempora hic
                            maiores maxime. Sed voluptatem impedit et quia sunt et aperiam
                            autem est facere quos sit nemo doloribus quo praesentium omnis 33
                            sunt voluptatem.
                        </div>
                    </div>
                    {/*cuadros de texto*/}
                    <div className={styles.contentLorem}>
                        <div className={styles.loremFa}>
                            <div className={styles.loremFaChild}/>
                            <div className={styles.loremIpsumDolor1}>
                                Lorem ipsum dolor sit amet. Et tempora esse eum facilis dolorum
                                cum omnis impedit. Sed distinctio dolorem est ducimus quia et
                                quod iusto et provident.
                            </div>
                        </div>
                        <div className={styles.loremFa1}>
                            <div className={styles.loremFaItem}/>
                            <div className={styles.loremIpsumDolor2}>
                                Lorem ipsum dolor sit amet. Et tempora esse eum facilis dolorum
                                cum omnis impedit. Sed distinctio dolorem est ducimus quia et
                                quod iusto et provident.
                            </div>
                        </div>
                        <div className={styles.loremFa2}>
                            <div className={styles.loremFaInner}/>
                            <div className={styles.loremIpsumDolor3}>
                                Lorem ipsum dolor sit amet. Et tempora esse eum facilis dolorum
                                cum omnis impedit. Sed distinctio dolorem est ducimus quia et
                                quod iusto et provident.
                            </div>
                        </div>
                        <div className={styles.contentLoremInner}>
                            <div className={styles.rectangleParent}>
                                <div className={styles.frameChild}/>
                                <div className={styles.loremIpsumDolor4}>
                                    Lorem ipsum dolor sit amet. Et tempora esse eum facilis
                                    dolorum cum omnis impedit. Sed distinctio dolorem est ducimus
                                    quia et quod iusto et provident.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {/*cudros de fotos*/}
            <div className={styles.photoGallery}>
                <div className={styles.photoGalleryChild}/>
                <Image
                    className={styles.foto1Icon}
                    loading="lazy"
                    width={500}
                    height={300}
                    alt=""
                    src="/images/Foto1.png"
                />
                <Image
                    className={styles.foto2Icon}
                    loading="lazy"
                    alt=""
                    width={500}
                    height={300}
                    src="/images/Foto2.png"
                />
                <Image
                    className={styles.foto4Icon}
                    loading="lazy"
                    alt=""
                    width={500}
                    height={300}
                    src="/images/Foto3.png"
                />
                <Image
                    className={styles.foto3Icon}
                    loading="lazy"
                    alt=""
                    width={500}
                    height={300}
                    src="/images/Foto4.png"
                />
            </div>
        </section>
    );
};

export default FrameComponent2;