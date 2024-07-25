import type {NextPage} from "next";
import styles from "../styles/proyecto.module.css";
import Link from 'next/link';
import Image from "next/image";

export type FrameComponentType = {
    className?: string;
    cardImage?: string;
    projectLink?: string;
};

const ProyectoItem: NextPage<FrameComponentType> = ({
                                                        className = "",
                                                        cardImage,
                                                        projectLink = "#",
                                                    }) => {
    return (
        <Link href={projectLink} className={styles.projectLink}>
            <section className={`${styles.projectCardWrapper} ${className}`}>
                <div className={styles.projectCard}>
                    <Image
                        width={100}
                        height={100}
                        className={styles.cardImageIcon}
                        loading="lazy"
                        alt="Proyecto"
                        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}${cardImage}`}
                    />
                    <div className={styles.cardContent}>
                        <div className={styles.cardTitleDescription}>
                            <div className={styles.projectDetails}>
                                <div className={styles.detailRow}>
                                    <span className={styles.detailLabel}>Nombre:</span>
                                    <span className={styles.detailContent}>Agricultura sostenible para los pueblos de América</span>
                                </div>
                                <div className={styles.detailRow}>
                                    <span className={styles.detailLabel}>Descripción:</span>
                                    <span className={styles.detailContent}>
                                        Lorem ipsum dolor sit amet. Ut labore culpa ad delectus
                                        distinctio in autem sunt est quae rerum! Et iure maiores aut
                                        dicta totam et dolores voluptatem 33 porro adipisci et nemo
                                        corrupti est expedita aspernatur?
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hoverOverlay}>
                        <span>Click para ver más</span>
                    </div>
                </div>
            </section>
        </Link>
    );
};

export default ProyectoItem;